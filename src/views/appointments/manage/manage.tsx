import React, { useEffect, useState } from "react";
import { IoIosTrash } from "react-icons/io";
import delete_from_localStorage from "../../../utils/delete-from-local-storage";
import read_from_localStorage from "../../../utils/read-from-local-storage";
import style from "./manage.module.scss";

const ManageAppointment = () => {
  const [appointments_list, set_appointments_list] = useState([]);

  /**
   * @appointments_list
   * get the booked appointments and save them on state
   */
  useEffect(() => {
    set_appointments_list(read_from_localStorage);
  }, []);

  return (
    <article className={[style.manage_appointment, "responsive"].join(" ")}>
      <h1>Appointments Management</h1>
      {/**
       * if the is not any reservation, show the proper message to the user
       * */}
      <div className={style.appointment_list_wrapper}>
        <div className={style.scroller} data-test-id='manage_appointment_list'>
          {appointments_list.length > 0 ? (
            // map the appointment list and showing the list
            <>
              <div className={style.table_header}>
                <p className={style.title}>Title</p>
                <p className={style.date}>Date</p>
                <p className={style.time}>Time</p>
                <p className={style.cancel}>Delete</p>
              </div>
              {appointments_list.map((appointment: any, index) => {
                return (
                  <div
                    className={style.appoints_list}
                    key={index}
                    data-test-id='manage_appointment_item_wrapper'
                  >
                    <p className={style.title}>{appointment.title}</p>
                    <p className={style.date}>
                      {appointment.date.day}-{appointment.date.month}-
                      {appointment.date.year}
                    </p>
                    <p className={style.time}>
                      {appointment.time.hour}:{appointment.time.minutes}
                    </p>
                    <p
                      className={style.cancel}
                      data-test-id='manage_appointment_delete'
                    >
                      <IoIosTrash
                        size='2.4rem'
                        color='#fff'
                        onClick={() => {
                          delete_from_localStorage(index);
                          set_appointments_list((appointments_list) =>
                            appointments_list.filter((_, i) => {
                              return i !== index;
                            })
                          );
                        }}
                      />
                    </p>
                  </div>
                );
              })}
            </>
          ) : (
            <p> There isn't appointment..</p>
          )}
        </div>
      </div>
    </article>
  );
};

export default ManageAppointment;
