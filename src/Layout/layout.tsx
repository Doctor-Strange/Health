import React from "react";
import FooterComponent from "../components/footer/footer";
import HeaderComponent from "../components/header/header";

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};

interface ILayout {
  children: any;
}

export default Layout;
