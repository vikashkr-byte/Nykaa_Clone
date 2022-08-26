import { Divider,Box } from "@chakra-ui/react";
import React from "react";
import BrandsItems from "./BrandsItems";
import CarouselBig from "./CarouselBig";
import ContactUsNykaa from "./ContactUsNykaa";
import DisplayDropDown from "./DisplayDropDown";
import FooterMenuList from "./FooterMenuList";
import FreeShippingInfo from "./FreeShippingInfo";
import ImageBelowBigCarousel from "./ImageBelowBigCarousel";
import LastFooter from "./LastFooter";
import Navbar from "./Navbar";
import PinkNav from "./PinkNav";
import SecondaryMenuDropDown from "./SecondaryMenuDropDown";
import SecondaryNavbar from "./SecondaryNavbar";
import StaticImage2 from "./StaticImage2";
import TopBrandsGrid from "./TopBrandsGrid";

const Mainfile = () => {
  return (
    <div style={{backGround:"rgb(243,243,243)"}}>
      <PinkNav />
      <Navbar />
      <Divider orientation="horizontal" border={"0.5px"} bg={"darkgray"} />
      <SecondaryNavbar />
      <Divider orientation="horizontal" border={"0.5px"} bg={"darkgray"} />
     <CarouselBig/>

     <Box h={"30px"} mt={"30px"} w={"100%"} 
     bg={"rgb(218, 218, 218)"}
    //  bg={"red"}
     ></Box>
     <ImageBelowBigCarousel />
     <StaticImage2/>
     <TopBrandsGrid/>
     <ContactUsNykaa/>
     <FooterMenuList/>
     <FreeShippingInfo/>
    <LastFooter/>

    </div>
  );
};

export default Mainfile;
