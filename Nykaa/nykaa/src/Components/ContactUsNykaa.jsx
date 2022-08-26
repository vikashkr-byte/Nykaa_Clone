import React from 'react'
import { IoMailOutline } from "react-icons/io5";
const ContactUsNykaa = () => {
  return (
    <div className='ContactusNykaaBoxMain'>
<div className='ContactUsNykaaMainContents'>
  <div className='mailToregister'>
    <IoMailOutline/>
    <h2 className='mailToregisterText'>Get special discount on your inbox</h2>
  </div>
  <div className='mailToregisterInput'>
    <input type="text" className='mailTorefisterinput'/>
    <button className='mailTorefisterBtn'>
      SEND
    </button>
  </div>
</div>
<div className='ContactUsNykaaMainContents'></div>
<div className='ContactUsNykaaMainContents'></div>
    </div>
  )
}

export default ContactUsNykaa