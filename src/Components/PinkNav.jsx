import React from "react";
import Bonanaza from "./Bonanaza";
import {
  Box as Box,
  HStack,
} from "@chakra-ui/react";
import PinkNavRightMenu from "./PinkNavRightMenu";

const PinkNav = () => {
  return (
    <HStack bg={"rgb(253,146,187)"} py={"4px"} px={"4px"}>
      <Box pl={"60px"} color={"rgb(50,49,68)"} h={"auto"} w={"45%"}>
        <Bonanaza />
      </Box>
      <PinkNavRightMenu/>
    </HStack>
  );
};

export default PinkNav;
