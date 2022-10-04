import { HStack } from "@chakra-ui/react";
import React from "react";
import "./ProductsDropDown.css"
const ProductsDropDown = () => {
  return (
    <HStack direction={"row"} w={"100%"} boxShadow='base'  rounded='md' bg='white' >
      <div className="NykaaFashionWhite">
        <h3 className="textTobeBold">What's New</h3>
        <h3 className="blanks">blanks</h3>
        <h3 className="textTobeBold">Women</h3>
        <h3 className="textTobeLight">Indianwear</h3>
        <h3 className="textTobeLight">Westernwear</h3>
        <h3 className="textTobeLight">Footwear</h3>
        <h3 className="textTobeLight">Bags</h3>
        <h3 className="textTobeLight">Lingerie</h3>
        <h3 className="textTobeLight">Sportswear</h3>
        <h3 className="textTobeLight">Sleep & Lounge</h3>
        <h3 className="textTobeLight">Jewellery</h3>
        <h3 className="textTobeLight">Watches</h3>
        <h3 className="textTobeLight">Accessories</h3>
        <h3 className="blanks">blanks</h3>
        <h3 className="textTobeBold">Men</h3>
        <h3 className="textTobeLight">Topwear</h3>
        <h3 className="textTobeLight">Bottomwear</h3>
        <h3 className="textTobeLight">Ethnicwear</h3>
      </div>
      <div className="NykaaFashionGray">
        <h3 className="textTobeLight">Topwear</h3>
        <h3 className="textTobeLight">Bottomwear</h3>
        <h3 className="textTobeLight">Ethnicwear</h3>
        <h3 className="textTobeLight">Footwear</h3>
        <h3 className="textTobeLight">Atheisure</h3>
        <h3 className="textTobeLight">Innerwear & Sleepwear</h3>
        <h3 className="textTobeLight">Watches</h3>
        <h3 className="textTobeLight">Accessories</h3>
        <h3 className="textTobeLight">Bags</h3>
        <h3 className="blanksGray">blanks</h3>
        <h3 className="textTobeBold">Style Guide</h3>
        <h3 className="blanksGray">blanks</h3>
        <h3 className="textTobeBold">Tech</h3>
        <h3 className="textTobeLight">Smart Wearables</h3>
        <h3 className="textTobeLight">Headphones</h3>
        <h3 className="textTobeLight">Speakers</h3>
        <h3 className="textTobeLight">Chargers & Cables</h3>
        <h3 className="textTobeLight">Power Banks</h3>
        <h3 className="blanksGray">blanks</h3>
      </div>
      <div className="NykaaFashionWhite">
        <h3 className="textTobeLight">Winterwear</h3>
        <h3 className="textTobeLight">Footwear</h3>
        <h3 className="textTobeLight">Toys & Games</h3>
        <h3 className="textTobeLight">Feeding</h3>
        <h3 className="textTobeLight">Sportswear</h3>
        <h3 className="textTobeLight">Sleep & Lounge</h3>
        <h3 className="blanks">blanks</h3>
        <h3 className="textTobeBold">Home</h3>
        <h3 className="blanks">blanks</h3>
        <h3 className="textTobeLight">Kitchen & Dining</h3>
        <h3 className="textTobeLight">Decor</h3>
        <h3 className="textTobeLight">Bedding</h3>
        <h3 className="textTobeLight">Bath</h3>
        <h3 className="textTobeLight">Storage</h3>
        <h3 className="textTobeLight">Floor Coverings</h3>
        <h3 className="textTobeLight">Kitchen Appliances</h3>
        <h3 className="blanks">blanks</h3>
        <h3 className="textTobeBold">House Of Nykaa</h3>
        <h3 className="textTobeLight">Twenty Dresses By Nykaa Fashion</h3>
      </div>
      <div className="NykaaFashionGray">
        <h3 className="textTobeLight">RSVP By Nykaa Fashion</h3>
        <h3 className="textTobeLight">Gajra Gang</h3>
        <h3 className="textTobeLight">Nykd By Nykaa</h3>
        <h3 className="textTobeLight">Pipa Bella</h3>
        <h3 className="textTobeLight">IYKYK By Nykaa Fashion</h3>
        <h3 className="textTobeLight">Kica</h3>
        <h3 className="textTobeLight">Twig And Twine</h3>
        <h3 className="textTobeLight">Likha By Nykaa Fashion</h3>
        <h3 className="blanksGray">blanks</h3>
        <h3 className="textTobeBold">Top Brands</h3>
        <h3 className="blanksGray">blanks</h3>
        <h3 className="textTobeLight">Vero Moda</h3>
        <h3 className="textTobeLight">W</h3>
        <h3 className="textTobeLight">FaBindia</h3>
        <h3 className="textTobeLight">Na-Kd</h3>
        <h3 className="textTobeLight">Koton</h3>
        <h3 className="textTobeLight">I Saw It First</h3>
        <h3 className="textTobeLight">Swtantra</h3>
        <h3 className="textTobeLight">Biba</h3>
        <h3 className="textTobeLight">Forever New</h3>
      </div>
      <div className="NykaaFashionImageMain">
        <div className="NykaaFashionImageBox">
            <img className="NykaaFashionImage" src="https://www.nykaa.com/media/wysiwyg/2022/NF-megamenu.jpg" alt="you love us for beauty" />
        </div>
      </div>
    </HStack>
  );
};

export default ProductsDropDown;
