import { Divider,Box } from "@chakra-ui/react";
import React from "react";
import BrandsItems from "./BrandsItems";
import CarouselBig from "./CarouselBig";
import DisplayDropDown from "./DisplayDropDown";
import ImageBelowBigCarousel from "./ImageBelowBigCarousel";
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
      {/* <Divider orientation="horizontal" mt={"30px"} border={"5px"}
      //  bg={"rgb(255,255,255)"} 
       bg={"red"}  */}
       {/* /> */}
     {/* <CarouselBig/> */}

    </div>
  );
};

export default Mainfile;
