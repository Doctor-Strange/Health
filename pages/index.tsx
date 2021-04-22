import Layout from "../src/Layout/layout";
import Home_Page from "../src/views/home/home";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <Layout>
      <NextSeo
        title='Health'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        openGraph={{
          title: "Health",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          site_name: "https://www.sample.com",
        }}
      />
      <Home_Page />
    </Layout>
  );
}
