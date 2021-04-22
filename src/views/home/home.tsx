import React from "react";
import Link from "next/link";
import { IoIosList } from "react-icons/io";
import { IoIosCalendar } from "react-icons/io";
import { IoIosCellular } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import style from "./home.module.scss";

const Home_Page = () => {
  return (
    <>
      <section className={[style.banner, "responsive"].join(" ")}>
        <div className={style.banner_content}>
          <h1>Providing Best Medical Care</h1>;
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
      <section className={[style.box_containers, "responsive"].join(" ")}>
        <div
          data-test-id='main_box'
          className={[style.emergency, style.box].join(" ")}
        >
          <IoIosCellular size='3rem' />
          <div>
            <h2>Emergency Call</h2>
            <p>
              Please feel free to contact our friendly reception staff with any
              general or medical enquiry.
            </p>
            <a href='tel:12345678901' data-test-id='main_emergency_link'>
              <IoIosCall size='2rem' />
              12345678901
            </a>
          </div>
        </div>
        <div className={[style.manage, style.box].join(" ")}>
          <IoIosList size='3rem' />
          <div>
            <h2>Reserved List</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and ...</p>
            <Link href='/manage-appointments'>
              <a data-test-id='main_manage_appointments'>
                go to appointment list
              </a>
            </Link>
          </div>
        </div>
        <div className={[style.make, style.box].join(" ")}>
          <IoIosCalendar size='3rem' />
          <div>
            <h2>Appointments</h2>
            <ul>
              <li>
                Monday <span>8.00 - 7:00 pm</span>
              </li>
              <li>
                Saturda<span>y 9.00 - 10:00 pm</span>
              </li>
              <li>
                Sunday <span>10.00 - 12:00 pm</span>
              </li>
            </ul>
            <Link href='/make-appointments'>
              <a data-test-id='main_make_appointments'>appointments</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_Page;
