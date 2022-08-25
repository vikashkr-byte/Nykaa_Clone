import { HStack, Center as div } from "@chakra-ui/react";
import React from "react";
import BrandsItems from "./BrandsItems";
import DisplayDropDown from "./DisplayDropDown";
import "./MainNavLeft.css";

const MainNavLeftMenu = () => {
  return (
    <HStack h={"90px"} maxH="20px">
      <div className="menuItems">Categories</div>
      <div className="brandsTest">
        <div id="menuItemsBrands" className="menuItems">Brands</div>

        <div className="dropDownstyling">
          <DisplayDropDown/>
        </div>
      </div>
      <div className="menuItems">Luxe</div>
      <div className="menuItems">Nykaa Fashion</div>
      <div className="menuItems">Beauty Advice</div>
    </HStack>
  );
};

export default MainNavLeftMenu;
