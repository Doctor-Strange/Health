import React from "react";
import Layout from "../src/Layout/layout";
import MakeAppointment from "../src/views/appointments/make/make";
import { NextSeo } from "next-seo";

const NewProject = () => {
  return (
    <Layout>
      <NextSeo
        title='Make an appointment'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        openGraph={{
          title: "Make an appointment",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          site_name: "https://www.sample.com/make-appointments",
        }}
      />
      <MakeAppointment />
    </Layout>
  );
};

export default NewProject;
