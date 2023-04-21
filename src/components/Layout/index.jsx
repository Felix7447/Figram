import React from "react";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Logo />
      {children}
      <NavBar/>
    </div>
  );
};
