import { HStack, Center as div } from "@chakra-ui/react";
import React from "react";
import BeautyAdvice from "./BeautyAdvice";
import BrandsItems from "./BrandsItems";
import DisplayDropDown from "./DisplayDropDown";
import "./MainNavLeft.css";
import ProductsDropDown from "./ProductsDropDown";

const MainNavLeftMenu = () => {
  return (
    <HStack h={"90px"} pt={"35px"}>
      <div className="menuItems">Categories</div>
      <div className="brandsTest">
        <div id="menuItemsBrands" className="menuItems">
          Brands
        </div>

        <div className="dropDownstyling">
          <DisplayDropDown />
        </div>
      </div>
      <div className="brandsTest">
        <div id="menuItemsLuxe" className="menuItems">
          Luxe
        </div>

        <div className="dropDownstylingLuxe">
          <ProductsDropDown />
        </div>
      </div>
      <div className="brandsTest">
        <div id="menuItemsLuxe" className="menuItems">
          Nykaa Fashion
        </div>

        <div className="dropDownstylingLuxe">
          <ProductsDropDown />
        </div>
      </div>
      <div className="brandsTest">
        <div id="menuItemsAdvice" className="menuItems">
          Beauty Advice
        </div>

        <div className="dropDownstylingAdvice">
          <BeautyAdvice />
        </div>
      </div>
      {/* <div className="menuItems">Nykaa Fashion</div> */}
    </HStack>
  );
};

export default MainNavLeftMenu;
