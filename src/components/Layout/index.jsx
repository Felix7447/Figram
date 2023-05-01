import React from "react";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";
import { Helmet } from "react-helmet";

export const Layout = ({ children, title = 'Home', content = 'Incredible pet photos!' }) => {
  return (
    <div>
      <Helmet>
        <title>{title} | Figram</title>
        <meta name="description" content={content} />
        <meta name="author" content="Felix Reyna" />
      </Helmet>
      <Logo />
      {children}
      <NavBar/>
    </div>
  );
};
