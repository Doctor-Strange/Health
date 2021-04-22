import React, { useEffect, useState } from "react";
import { Timepicker } from "react-timepicker";
import style from "./make.module.scss";
import "react-timepicker/timepicker.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import save_to_localStorage from "../../../utils/save-to-localstorage";
import Router from "next/router";
import validation from "../../../utils/validation";
import read_from_localStorage from "../../../utils/read-from-local-storage";

const MakeAppointment = () => {
  const [appointment_title, set_appointment_title] = useState("");
  const [selected_day, set_selected_day] = useState(null);
  const [appointment_time, set_appointment_time] = useState({
    hours: 0,
    minutes: 0,
  });
  const [error, set_error] = useState({ status: false, message: "" });
  const [reserved_days, set_reserved_days] = useState([]);

  /**
   * on each load of this component the restored appointments were checked
   * to disable the reserved days on date picker
   */
  useEffect(() => {
    set_reserved_days((reserved_days) =>
      /**
       * @reserved_days
       * is a array of disabled date object
       */
      reserved_days.concat(
        read_from_localStorage().map((appointment: IAppointment) => {
          return appointment.date;
        })
      )
    );
  }, []);

  return (
    <article className={[style.make_appointment, "responsive"].join(" ")}>
      <h1>Make An Appointment</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          /**
           * @error
           * reset the last error if the is one
           */
          set_error({ status: false, message: "" });
          /**
           * @try @catch
           * implemented to catch the error during validation process
           */
          try {
            validation({
              require: [
                { name: "Appointment Title", value: appointment_title },
                { name: "Appointment Date", value: selected_day },
                { name: "Appointment Time", value: appointment_time.hours },
              ],
            });

            save_to_localStorage({
              title: appointment_title,
              date: selected_day,
              time: {
                hour: appointment_time.hours,
                minutes: appointment_time.minutes,
              },
            });
            /**
             * after saving the appointment on the storage
             * the user is redirected to manage page
             */
            Router.push("/manage-appointments");
            window.scrollTo(0, 0);
          } catch (e) {
            /**
             * the incoming object is look like this
             * { status: boolean; message: string; }
             */
            set_error({
              status: e.error,
              message: e.message,
            });
          }
        }}
      >
        <div className={style.field_wrapper}>
          <label data-for='title_appointment'>Appointment Title</label>
          <input
            data-test-id='make_appointment_title'
            type='text'
            id='title_appointment'
            value={appointment_title}
            onChange={(e) => set_appointment_title(e.target.value)}
          />
        </div>
        <div className={style.field_wrapper}>
          <label>Pick a day</label>
          <DatePicker
            value={selected_day}
            onChange={(e: any) => {
              set_selected_day(e);
            }}
            // the list of reserved days
            disabledDays={reserved_days}
            // place holder for the date picker input
            inputPlaceholder='Select a day'
            // the holidays will have color red style
            shouldHighlightWeekends
            // user can not select a date before today
            minimumDate={utils("en").getToday()}
          />
        </div>
        {selected_day && (
          <div
            className={[style.field_wrapper, style.time_picker_wrapper].join(
              " "
            )}
            data-test-id='make_appointment_time_picker'
          >
            <label>Select the time for your appointment</label>
            <Timepicker
              mode={1}
              onChange={(hours: number, minutes: number) => {
                set_appointment_time({
                  hours: hours,
                  minutes: minutes,
                });
              }}
            />
          </div>
        )}
        {/**
         * @onClick
         * the onClick is handled through the form submission
         */}
        <button
          data-test-id='make_appointment_submit_form'
          className={style.form_button}
        >
          conform
        </button>
        <span className={style.error_message}>
          {error.status && <p>{error.message}</p>}
        </span>
      </form>
    </article>
  );
};

interface IAppointment {
  date: { day: number; month: number; year: number };
  time: any;
  title: string;
}

export default MakeAppointment;
