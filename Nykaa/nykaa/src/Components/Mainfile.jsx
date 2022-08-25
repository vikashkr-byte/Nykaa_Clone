import { Divider } from "@chakra-ui/react";
import React from "react";
import BrandsItems from "./BrandsItems";
import DisplayDropDown from "./DisplayDropDown";
import Navbar from "./Navbar";
import PinkNav from "./PinkNav";
import SecondaryNavbar from "./SecondaryNavbar";

const Mainfile = () => {
  return (
    <div>
      <PinkNav />
      <Navbar />
      <Divider orientation="horizontal" border={"0.5px"} bg={"darkgray"} />
      <SecondaryNavbar />
    </div>
  );
};

export default Mainfile;
