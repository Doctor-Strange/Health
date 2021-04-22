import React from "react";
import Layout from "../src/Layout/layout";
import ManageAppointment from "../src/views/appointments/manage/manage";
import { NextSeo } from "next-seo";

const Pricing = () => {
  return (
    <Layout>
      <NextSeo
        title='Manage your appointments'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        openGraph={{
          title: "Manage your appointments",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          site_name: "https://www.sample.com/manage-appointments",
        }}
      />
      <ManageAppointment />
    </Layout>
  );
};

export default Pricing;
