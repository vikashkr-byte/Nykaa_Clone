import React from "react";
import "./ContactUsNykaa.css";
import { MdEmail } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
const ContactUsNykaa = () => {
  return (
    <div className="ContactusNykaaBoxMain">
      <div className="ContactUsNykaaMainContents">
        <div className="mailToregister">
          <MdEmail className="iconsContactus" />
          <h2 className="mailToregisterText">
            Get special discount on your inbox
          </h2>
        </div>
        <div className="mailToregisterInput">
          <input
            type="text"
            className="mailTorefisterinput"
            placeholder="Your Email"
          />
          <button className="mailTorefisterBtn">SEND</button>
        </div>
      </div>
      <div className="ContactUsNykaaMainContents">
        <div className="ContactusSmartPhone">
          <GiSmartphone className="iconsContactus"  />
          <h2 className="mailToregisterText2">
            EXPERIENCE THE NYKAA MOBILE APP
          </h2>
        </div>
        <div className="contactusGetIton">
          <img
            className="ContactUsGetImage"
            src="https://lemyers.com/wp-content/uploads/2013/12/google-play-badge.png"
            alt=""
          />
          <img
            className="ContactUsGetImage"
            src="https://w7.pngwing.com/pngs/822/688/png-transparent-apple-on-the-app-store-screenshot-iphone-app-store-google-play-store-electronics-text-logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="ContactUsNykaaMainContents2">
        <div className="ContactusSmartPhone">
          
        <h2 className="mailToregisterText34">
        <BsTelephone className="iconsContactus"/>FOR ANY HELP YOU MAY CALL US AT</h2>
        </div>
        <h2 className="mailToregisterText3">1800-267-4444</h2>
        <h3 className="mailToregisterText4">(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</h3>
      </div>
    </div>
  );
};

export default ContactUsNykaa;
