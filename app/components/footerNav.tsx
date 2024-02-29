import React from "react";
import { QuickLinks } from "./quickLinks";
import { appRoutes } from "../util/routes";

const Footer = () => {
  return (
    <footer className=" pt-3 pb-12  space-x-2 ">
    <QuickLinks route={appRoutes.nomanrani}>Noman rani</QuickLinks>
    <QuickLinks route={appRoutes.ladin}>Ladin</QuickLinks>
        <strong>&copy; All rights reserved </strong>

    </footer>
  );
};

export default Footer;
