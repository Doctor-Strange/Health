describe("Testing My Assignment Project", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Checking the navigation", () => {
    // click on the make appointment link in header
    cy.get("[data-test-id=header_make_appointment_link]")
      .click()
      .url()
      // check the url to contain the value of 'make-appointments'
      // this way I can found out the navigation is correct
      .should("include", "/make-appointments");
    // click on the logo in header to go back to home
    cy.get("[data-test-id=header_logo_icon]").click();
    // click on the manage appointment link in header
    cy.get("[data-test-id=header_manage_appointment_link]")
      .click()
      .url()
      // check the url for accuracy
      .should("include", "/manage-appointments")
      .go("back");
    // click on the link in the first box below the banner to navigate to make appointment page
    cy.get("[data-test-id=main_make_appointments]")
      .click()
      .url()
      // check the url
      .should("include", "/make-appointments")
      .go("back");
    // check the second box's link
    cy.get("[data-test-id=main_manage_appointments]")
      .click()
      .url()
      // check the url
      .should("include", "/manage-appointments")
      .go("back");
  });
  it("responsive in size 360px", () => {
    cy.viewport(360, 660);
    // in this size menu bar must exist
    cy.get("[data-test-id=header_menu_bar]")
      .should("have.css", "display", "block")
      // check the style to be correct in this view port
      .get("[data-test-id=main_box]")
      .should("have.css", "width", "311px")
      // check the style to be correct in this view port
      .get("[data-test-id=footer_about_us]")
      .should("have.css", "width", "311px");
    // click on menu bar to show the menu
    cy.get("[data-test-id=header_menu_bar]")
      .click()
      // checking the menu
      .get("[data-test-id=header_nav]")
      .should("have.attr", "class")
      .and("include", "show_menu");
    /**
     * by clicking on the draw back the menu must be disappeared
     */
    cy.get("[data-test-id=back_draw]")
      .click({ force: true })
      .get("[data-test-id=header_nav]")
      .should("have.attr", "class")
      .and("not.include", "show_menu");
  });
  it("Add some appointments and remove them", () => {
    /**
     * click on make appointment and go to the make appointment page
     */
    cy.get("[data-test-id=header_make_appointment_link]").click();
    cy.get("[data-test-id=make_appointment_title]")
      // select the title input and typing something
      .type("test number 1")
      // click on date picker to show the calender
      .get("[data-testid=datepicker-input]")
      .click()
      // click on next month to have more available days
      .get(".Calendar__monthArrowWrapper.-left")
      // sometimes just one click in the cypress test os not enough and make no change on the dom
      // that way we clicked twice
      .trigger("click")
      .trigger("click")
      // get a day in calender and click on it
      .get(
        ".Calendar__section.-shown .Calendar__weekRow:nth-of-type(3) .Calendar__day:nth-of-type(1)"
      )
      .click({ force: true });
    // after this the time picker will show up
    /**
     * #TODO
     * #REVIEW
     * @ATTENTION
     * in this step you may get an error
     * the reason is delay in updating the DOM
     * to solve that just press CTRL+S or CMD+S to rerun the test
     * I know it's annoying and weird bug
     */
    cy.get("[data-test-id=make_appointment_time_picker]")
      .should("exist")
      // select the hour
      .get(
        ".timepicker-visible:nth-of-type(1) .timepicker-bubble:nth-of-type(13)"
      )
      .click()
      // select the minute
      .get(
        ".timepicker-visible:nth-of-type(2) .timepicker-bubble:nth-of-type(13)"
      )
      .click()
      // submit the form
      .get("[data-test-id=make_appointment_submit_form]")
      .click()
      .wait(1000)
      // came back to add another one
      .go("back")
      .get("[data-test-id=make_appointment_title]")
      .type("test number 2")
      .get("[data-testid=datepicker-input]")
      .click()
      .get(".Calendar__monthArrowWrapper.-left")
      .trigger("click")
      .trigger("click")
      .get(
        ".Calendar__section.-shown .Calendar__weekRow:nth-of-type(3) .Calendar__day:nth-of-type(2)"
      )
      .click({ force: true });
    cy.get("[data-test-id=make_appointment_time_picker]")
      .should("exist")
      .get(
        ".timepicker-visible:nth-of-type(1) .timepicker-bubble:nth-of-type(13)"
      )
      .click()
      .get(
        ".timepicker-visible:nth-of-type(2) .timepicker-bubble:nth-of-type(13)"
      )
      .click()
      .get("[data-test-id=make_appointment_submit_form]")
      .click()

      .wait(1000)
      .go("back")
      // like before came back to add another one
      .get("[data-test-id=make_appointment_title]")
      .type("test number 3")
      .get("[data-testid=datepicker-input]")
      .click()
      .get(".Calendar__monthArrowWrapper.-left")
      .trigger("click")
      .trigger("click")
      .get(
        ".Calendar__section.-shown .Calendar__weekRow:nth-of-type(3) .Calendar__day:nth-of-type(3)"
      )
      .click({ force: true });
    cy.get("[data-test-id=make_appointment_time_picker]")
      .should("exist")
      .get(
        ".timepicker-visible:nth-of-type(1) .timepicker-bubble:nth-of-type(5)"
      )
      .click()
      .get(
        ".timepicker-visible:nth-of-type(2) .timepicker-bubble:nth-of-type(17)"
      )
      .click()
      .get("[data-test-id=make_appointment_submit_form]")
      .click()
      .then(() => {
        /**
         * @localstorage
         * check the storage to have the same length as your result in the manage appointment
         */
        let data = JSON.parse(localStorage.getItem("data"));
        expect(data.length).to.eq(3);
        // click on a item to delete it from the array
        cy.get(
          "[data-test-id=manage_appointment_list] [data-test-id=manage_appointment_item_wrapper]:nth-of-type(2) [data-test-id=manage_appointment_delete]"
        )
          .click()
          .then(() => {
            // check the local storage
            let data = JSON.parse(localStorage.getItem("data"));
            expect(data.length).to.eq(2);
            cy.get(
              "[data-test-id=manage_appointment_list] [data-test-id=manage_appointment_item_wrapper]"
            ).should("have.length", 2);
            cy.get(
              "[data-test-id=manage_appointment_list] [data-test-id=manage_appointment_item_wrapper]:nth-of-type(2) [data-test-id=manage_appointment_delete]"
            )
              // click on another item to delete it from the array
              .click()
              .then(() => {
                // check the local storage
                let data = JSON.parse(localStorage.getItem("data"));
                expect(data.length).to.eq(1);
                // check the results in the manage page
                cy.get(
                  "[data-test-id=manage_appointment_list] [data-test-id=manage_appointment_item_wrapper]"
                ).should("have.length", 1);
              });
          });
      });
  });
});
