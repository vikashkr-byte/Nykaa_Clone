import React from 'react'
import { RiSmartphoneLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import {
  
  Divider,
  HStack,
  
  Center,
} from "@chakra-ui/react";
import './PinkNav.css'
const PinkNavRightMenu = () => {
  return (
    <div>
        <HStack pl={"140px"} direction={"row"} spacing={"20px"}>
        <div className='pinkright' style={{ display: "flex", alignItems: "center", gap: "10px", }}>
          {<RiSmartphoneLine mr={"3px"} />} Get App 
        </div>
        <Center height="22px" >
          <Divider orientation="vertical" borderColor={"black"} />
        </Center>

        <div className='pinkright' style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {<GrLocation mr={"3px"} />}Store & Events
        </div>
        <Center height="22px">
          <Divider orientation="vertical" borderColor={"black"} />
        </Center>
        <div className='pinkright' style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {<MdOutlineCardGiftcard mr={"3px"} />} Gift Card
        </div>
        <Center height="22px">
          <Divider orientation="vertical" borderColor={"black"} />
        </Center>
        <div className='pinkright' style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {<FiHelpCircle mr={"3px"} />} Help
        </div>
      </HStack>
    </div>
  )
}

export default PinkNavRightMenu