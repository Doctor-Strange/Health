import React from "react";
import Link from "next/link";
import style from "./footer.module.css";
import logo from "../../../public/images/logo.png";
import { IoIosCall } from "react-icons/io";

const FooterComponent = () => {
  return (
    <footer className={[style.footer, "responsive"].join(" ")}>
      <section className={style.about_us} data-test-id='footer_about_us'>
        <Link href='/'>
          <a className={style.logo}>
            <img src={logo} alt='our logo' />
            Health
          </a>
        </Link>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </section>
      <section className={style.department}>
        <h3>Departments</h3>
        <ul>
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>simply</li>
          <li>dummy</li>
        </ul>
      </section>
      <section className={style.footer_links}>
        <h3>Links</h3>
        <ul>
          <li>text</li>
          <li>dummy</li>
          <li>Ipsum</li>
          <li>industry</li>
          <li>typesetting</li>
          <li>simply</li>
        </ul>
      </section>
      <section className={style.contact_us}>
        <h3>Quick Contacts</h3>
        <p>
          If you have any questions or need help, feel free to contact with our
          team.
        </p>
        <a href='tel:12345678901'>
          <IoIosCall size='3rem' />
          12345678901
        </a>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
      </section>
    </footer>
  );
};

export default FooterComponent;
