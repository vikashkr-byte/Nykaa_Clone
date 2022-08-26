import React from "react";
import "./FreeShippingInfo.css";
import { FaTruckMoving } from "react-icons/fa";
import { FaTag, FaPinterest } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoRibbon } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Divider } from "@chakra-ui/react";
const FreeShippingInfo = () => {
  return (
    <div className="freeshippingMainBox">
      <div className="freeshippingSubBox">
        <div className="freeshippingSubBoxIcon">
          <FaTruckMoving size={20} color={"white"} />
        </div>
        <div className="freeshippingSubBoxtext">
          <h2 className="freeshippingSubBoxtextLarge">FREE SHIPPING</h2>
          <Divider
            border={"1px"}
            bg={"rgb(58, 57, 57)"}
            orientation={"horizontal"}
          />
          <h2 className="freeshippingSubBoxtextSmall">On Orders Above ₹299</h2>
        </div>
      </div>

      <div className="freeshippingSubBox">
        <div className="freeshippingSubBoxIcon">
          <TiTick size={20} color={"white"} />
        </div>
        <div className="freeshippingSubBoxtext">
          <h2 className="freeshippingSubBoxtextLarge">EASY RETURNS</h2>
          <Divider
            border={"1px"}
            bg={"rgb(58, 57, 57)"}
            orientation={"horizontal"}
          />
          <h2 className="freeshippingSubBoxtextSmall">15-Day Return Policy</h2>
        </div>
      </div>
      <div className="freeshippingSubBox">
        <div className="freeshippingSubBoxIcon">
          <IoRibbon size={20} color={"white"} />
        </div>
        <div className="freeshippingSubBoxtext">
          <h2 className="freeshippingSubBoxtextLarge">100% AUTHENTIC</h2>
          <Divider
            border={"1px"}
            bg={"rgb(58, 57, 57)"}
            orientation={"horizontal"}
          />
          <h2 className="freeshippingSubBoxtextSmall">
            Products Sourced Directly
          </h2>
        </div>
      </div>
      <div className="freeshippingSubBox">
        <div className="freeshippingSubBoxIcon">
          <FaTag size={20} color={"white"} />
        </div>
        <div className="freeshippingSubBoxtext">
          <h2 className="freeshippingSubBoxtextLarge">2400+ BRANDS</h2>
          <Divider
            border={"1px"}
            bg={"rgb(58, 57, 57)"}
            orientation={"horizontal"}
          />
          <h2 className="freeshippingSubBoxtextSmall">1.9 Lakh+ Products</h2>
        </div>
      </div>
      <div className="freeshippingSubBox">
        <div className="freeshippingSubBoxFifthBox">
          <div className="freeshippingSubBoxFifth">
            <h1 className="freeshippingSubBoxFifthtext">
              Show us some love ❤ on social media
            </h1>
          </div>
          <div className="freeshippingSubBoxFifthIcons">
            <AiFillInstagram /> <AiFillFacebook /> <AiFillYoutube />
            <AiFillTwitterCircle /> <FaPinterest />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default FreeShippingInfo;
