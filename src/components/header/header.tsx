import React, { useState } from "react";
import Link from "next/link";
import style from "./header.module.scss";
import logo from "../../../public/images/logo.png";
import { IoIosGrid, IoIosList } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
const HeaderComponent = () => {
  const [menu_in_mobile, set_menu_in_mobile] = useState(false);

  /**
   *
   * @param value
   * after each click the menu will be disappeared
   * this way user can see the new page
   */
  const disappear_the_menu = (value: boolean) => {
    if (value) {
      set_menu_in_mobile(false);
    }
  };

  return (
    <header className={[style.header, "responsive"].join(" ")}>
      <IoMdMenu
        data-test-id='header_menu_bar'
        className={style.menu_icon}
        size='3rem'
        color='#0e2051'
        onClick={() => {
          set_menu_in_mobile(true);
        }}
      />
      {menu_in_mobile && (
        <div
          data-test-id='back_draw'
          className={style.back_drawer}
          onClick={() => {
            set_menu_in_mobile(false);
          }}
        ></div>
      )}
      <nav
        data-test-id='header_nav'
        className={[
          style.menu_items,
          menu_in_mobile ? style.show_menu : null,
        ].join(" ")}
      >
        <Link href='/make-appointments'>
          <a
            data-test-id='header_make_appointment_link'
            className={[style.add_appointment, style.link].join(" ")}
            onClick={() => disappear_the_menu(false)}
          >
            Appointments
            <IoIosGrid size='2rem' />
          </a>
        </Link>
        <Link href='/manage-appointments'>
          <a
            data-test-id='header_manage_appointment_link'
            className={[style.appointment_management, style.link].join(" ")}
            onClick={() => disappear_the_menu(false)}
          >
            Manage Appointments
            <IoIosList size='2rem' />
          </a>
        </Link>
      </nav>
      <Link href='/'>
        <a className={style.logo} data-test-id='header_logo_icon'>
          <img src={logo} alt='our logo' />
        </a>
      </Link>
    </header>
  );
};

export default HeaderComponent;
