import { HStack } from "@chakra-ui/react";
import React from "react";
import BrandsItems from "./BrandsItems";

const DisplayDropDown = () => {
  return (
    <HStack
      // border={"1px"}
      // h={"300px"}
      w={"100%"}
      margin={"auto"}
      direction={"row"}
    >
      <BrandsItems/>
    </HStack>
  );
};

export default DisplayDropDown;
