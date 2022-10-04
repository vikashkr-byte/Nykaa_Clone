import { HStack } from "@chakra-ui/react";
import React from "react";
import "./BeautyAdvice.css";
const BeautyAdvice = () => {
  return (
    <div>
      <HStack direction={"row"} mt={"-20px"} boxShadow='base'  rounded='md' bg='white' p={"10px"} >
        <div className="adviceVideo">
          <div className="adviceVidbox">
            <img
              className="adviceVid"
              src="https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg"
              alt="1"
            />
          </div>
          <h2 className="adviceH2">BEAUTY BOOK</h2>
          <h3 className="adviceh3">Nykaa's digital Magazine</h3>
        </div>
        <div className="adviceVideo">
          <div className="adviceVidbox">
            <img
              className="adviceVid"
              src="https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png"
              alt="2"
            />
          </div>
          <h2 className="adviceH2">NYKAA TV</h2>
          <h3 className="adviceh3">Masterclasses By Experts and Vloggers</h3>
        </div>
        <div className="adviceVideo">
          <div className=".adviceVidbox">
            <img
              className="adviceVid"
              src="https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg"
              alt="3"
            />
          </div>
          <h2 className="adviceH2">BEAUTY BUYING GUIDE</h2>
          <h3 className="adviceh3">Tips To Explore While You Shop</h3>
        </div>
      </HStack>
    </div>
  );
};

export default BeautyAdvice;
