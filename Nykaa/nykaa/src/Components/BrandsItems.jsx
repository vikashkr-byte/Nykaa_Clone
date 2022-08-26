import {
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import "./BrandsItems.css";
// const getData=()=>{
//   return fetch("https://makeup-api.herokuapp.com/api/v1/products.json").then((res)=>res.json())
// }
// console.log('getData:', getData())

const BrandsItems = () => {
  // const [data,setData]=useState([])
  //   useEffect(() => {
  //   getData().then((res)=>{
  // setData(res)
  // console.log('res:', res[0].brand)
  //   })
  //   }, [])

  return (
    <HStack border={"1px"} bg={"rgb(255,255,255)"} w={"100%"} direction={"row"}>
      <div className="withSearchBox">
        <VStack>
          <div className="searchBoxSub">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <IoIosSearch
                    size={"24px"}
                    fontWeight={100}
                    color="gray.300"
                  />
                }
              />
              <Input
                type="text"
                w={"300px"}
                bg={"rgb(244,244,244)"}
                placeholder="Search Brands"
              />
            </InputGroup>
          </div>
          <Divider orientation="horizontal" />
          <div className="NoSearchBox">
            <div className="NoSearchBoxWords">
              <h2>TOPBRANDS</h2>
              <h4 className="blanks">blanks</h4>

              <h3>Maybelline New York</h3>
              <h3>Lakme</h3>
              <h3>Nykaa Cosmetics</h3>
              <h3>M.A.C</h3>
              <h3>The Face Shop</h3>
              <h1 className="blanks">blanks</h1>
              <h3>A</h3>
              <h4 className="blanks">blanks</h4>

              <h3>A Clutch Story</h3>
              <h3>A Fragrance Story</h3>
              <h3>A-Derma</h3>
              <h3>A'kin</h3>
              <h3>Aadiva</h3>
              <h1 className="blanks">blanks</h1>
              <h3>B</h3>
              <h4 className="blanks">blanks</h4>

              <h3>Babila</h3>
              <h3>Baby Moo</h3>
              <h3>Babyliss</h3>
              <h3>Babymama</h3>
              <h1 className="blanks">blanks</h1>
              <h3>C</h3>
              <h4 className="blanks">blanks</h4>

              <h3>C.A.L Los Angeles</h3>
              <h3>C2P Pro</h3>
              <h3>C9 Airwear</h3>
              <h3>CADIVEU</h3>
              <h1 className="blanks">blanks</h1>
              <h3>D</h3>
              <h4 className="blanks">blanks</h4>

              <h3>D1 Milano</h3>
              <h3>Da Intimo</h3>
              <h3>Dabur</h3>
              <h3>Dafni</h3>
              <h1 className="blanks">blanks</h1>
              <h3>E</h3>
              <h4 className="blanks">blanks</h4>

              <h3>E2O Fashion</h3>
              <h3>Earth Bags</h3>
              <h3>Earth Rhythm</h3>
              <h1 className="blanks">blanks</h1>
              <h3>F</h3>
              <h4 className="blanks">blanks</h4>

              <h3>Follihair</h3>
              <h3>foodstrong</h3>
              <h3>Forbis</h3>
              <h3>FOREO</h3>
            </div>
            <div className="NoSearchBoxLetters">
              <h3>*</h3>
              <h3>A</h3>
              <h3>B</h3>
              <h3>C</h3>
              <h3>D</h3>
              <h3>E</h3>
              <h3>F</h3>
              <h3>G</h3>
              <h3>H</h3>
              <h3>I</h3>
              <h3>J</h3>
              <h3>K</h3>
              <h3>L</h3>
              <h3>M</h3>
              <h3>N</h3>
              <h3>O</h3>
              <h3>P</h3>
              <h3>Q</h3>
              <h3>R</h3>
              <h3>S</h3>
              <h3>T</h3>
              <h3>U</h3>
              <h3>V</h3>
              <h3>W</h3>
              <h3>X</h3>
              <h3>X</h3>
              <h3>Y</h3>
              <h3>Z</h3>
            </div>
          </div>
        </VStack>
      </div>
      <div className="withoutSearchBox">
        <div className="WSBbuttonbox">
          <button className="WSBBtn">POPULAR</button>
          <button className="WSBBtn">LUXE</button>
          <button className="WSBBtn">ONLY AT NYKAA</button>
          <button className="WSBBtn">NEW LAUNCHES</button>
        </div>
        <Divider orientation="horizontal" />
        <div className="WSBLogoBox">
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://1000logos.net/wp-content/uploads/2020/04/Maybelline-Logo.jpeg"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://image3.mouthshut.com/images/imagesp/926004758s.png"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://1000logos.net/wp-content/uploads/2019/06/MAC-Logo.png"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://1000logos.net/wp-content/uploads/2017/03/LOreal-Symbol.jpg"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://cdn.influenster.com/media/brand/image/Huda_beauty_logo_3b9frHd.jpeg"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://www.dealerbaba.com/app/webroot/files/directory/thumb/62772_logo.png"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://sastaoffer.in/wp-content/uploads/2022/05/Faces-Canada-Logo-1024x416.png"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://images.squarespace-cdn.com/content/v1/54e57c46e4b070fd064c0b85/1426710526830-F4VPF92VY8TNKJKTX5NB/image-asset.jpeg?format=1000w"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTT4MXOTW9v3LMRXKrwnp_-OvDVhk0oEgMcBx_tF0rL4JBw4bzIIAJ0RD1SiKnNO09U-8&usqp=CAU"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://www.logolynx.com/images/logolynx/83/83917e0993f8b1674ff8076d03ca539d.jpeg"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://cdn.shopify.com/s/files/1/0428/8063/0937/files/Copy-of-LOTUS-HERBALS_9da8eb0e-9456-487d-8cd7-600e35066411.jpg?v=1631270806"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/NIVEA_logo_2021.svg/2048px-NIVEA_logo_2021.svg.png"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://1000logos.net/wp-content/uploads/2020/04/Clinique-Logo.png"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://1000logos.net/wp-content/uploads/2020/04/Neutrogena-Logo.png"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://i.pinimg.com/originals/6f/14/18/6f1418fe74c573b8fd88586522616c8e.jpg"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://logos-world.net/wp-content/uploads/2020/11/Olay-Logo-2017-present.jpg"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2020/04/22/kay.jpg?itok=hvWGBwIl"
              alt=""
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandlogoImg"
              src="https://1000logos.net/wp-content/uploads/2020/04/Herbal-Essences-logo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </HStack>
  );
};

export default BrandsItems;
