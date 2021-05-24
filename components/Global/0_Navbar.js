import React from "react";
import { DesktopNav } from "./DesktopNav";
import { Mobilenav } from "./MobileNav";

export const NavBar = ({ farge, type }) => {
  return (
    <React.Fragment className="mb-40">
      <nav className="position absolute inset-x-0 z-100 lg:hidden shadow-shadow">
        <Mobilenav farge={farge} type={type} />
      </nav>
      <nav className="position absolute inset-x-0 z-100 hidden lg:flex shadow-shadow">
        <DesktopNav farge={farge} />
      </nav>
    </React.Fragment>
  );
};
