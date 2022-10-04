import { HStack } from '@chakra-ui/react'
import React from 'react'
import SecondaryMenuDropDown from './SecondaryMenuDropDown'
import './SecondaryNavbar.css'

const SecondaryNavbar = () => {
  return (
    <HStack direction={"row"} h={"45px"} pt={"5px"}  w={"90%"} m={"auto"} spacing={6} pl={"20px"} >
        {/* <div className='menuSecondCont'> */}

          <div className="brandsTest">
        <div id="menuItemsMakeUp" className="SecondmenuItems">
          Makeup
        </div>

        <div className="dropDownstyling">
          <SecondaryMenuDropDown/>
        </div>
      </div>

          <div className="brandsTest">
        <div id="menuItemsSkin" className="SecondmenuItems">
          Skin
        </div>

        <div className="dropDownstyling">
          {/* <DisplayDropDown /> */}
        </div>
      </div>

          <div className="brandsTest">
        <div id="menuItemsMakeUp" className="SecondmenuItems">
          Hair
        </div>

        <div className="dropDownstyling">
          {/* <DisplayDropDown /> */}
        </div>
      </div>

          <div className="brandsTest">
        <div id="menuItemsMakeUp" className="SecondmenuItems">
          Appliances
        </div>

        <div className="dropDownstyling">
          {/* <DisplayDropDown /> */}
        </div>
      </div>

          <div className="brandsTest">
        <div id="menuItemsMakeUp" className="SecondmenuItems">
          Bath & Body
        </div>

        <div className="dropDownstyling">
          {/* <DisplayDropDown /> */}
        </div>
      </div>

          <div className="brandsTest">
        <div id="menuItemsMakeUp" className="SecondmenuItems">
          Natural
        </div>

        <div className="dropDownstyling">
          {/* <DisplayDropDown /> */}
        </div>
      </div>

          <div className="brandsTest">
        <div id="menuItemsMakeUp" className="SecondmenuItems">
          Mom & Baby
        </div>

        <div className="dropDownstyling">
          {/* <DisplayDropDown /> */}
        </div>
      </div>

          <div className="brandsTest">
        <div id="menuItemsMakeUp" className="SecondmenuItems">
          Health & Wellness
        </div>

        <div className="dropDownstyling">
          {/* <DisplayDropDown /> */}
        </div>
      </div>

          <div className="brandsTest">
        <div id="menuItemsMakeUp" className="SecondmenuItems">
          Men
        </div>

        <div className="dropDownstyling">
          {/* <DisplayDropDown /> */}
        </div>
      </div>

          <div className="brandsTest">
        <div id="menuItemsMakeUp" className="SecondmenuItems">
          Fragrance
        </div>

        <div className="dropDownstyling">
          {/* <DisplayDropDown /> */}
        </div>
      </div>

          <div className="brandsTest">
        <div id="menuItemsMakeUp" className="SecondmenuItems">
          Pop Ups
        </div>

        <div className="dropDownstyling">
          {/* <DisplayDropDown /> */}
        </div>
      </div>
      <div className='lipstickOfferbox'>
        <img className='lipstickSmudgeImage' src="https://img.freepik.com/premium-photo/red-lipstick-smudge-isolated-white_89245-556.jpg?w=2000" alt="" />
        {/* <h4 className='offerTextSmudge'>OFFERS</h4> */}
         </div>
        {/* </div> */}
    </HStack>
  )
}

export default SecondaryNavbar