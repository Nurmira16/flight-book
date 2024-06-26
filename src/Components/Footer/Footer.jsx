import React from 'react';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import {TiSocialFacebook} from "react-icons/ti";
const Footer = () => {
  return (
    <div className='sectionContainer container grid'>
      <div className='gridOne'>
        <div className='logoDiv'>
          <img src="src/assets/imgLogo.png" alt="" />
        </div>
        <p>Your mind should be stronger than your feelings, fly!</p>
      </div>
      <div className='socialIcon flex'>
        <TiSocialFacebook className='icon'/>
        <AiOutlineTwitter className='icon'/>
        <AiFillYoutube className='icon'/>
      </div>
      <div className='footerLinks'>
        <span className='linkTitle'>Information</span>
        <li><a href="">Home</a></li>
        <li><a href="">Explore</a></li>
        <li><a href="">Flight Status</a></li>
        <li><a href="">Travel</a></li>
        <li><a href="">Check-In</a></li>
        <li><a href="">Manage your booking</a></li>
      </div>
      <div className='footerLinks'>
        <span className='linkTitle'>Quick Guide</span>
        <li><a href="">FAQ</a></li>
        <li><a href="">How To</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">Baggage</a></li>
        <li><a href="">Route Map</a></li>
        <li><a href="">Our Communities</a></li>
      </div>
      <div className='footerLinks'>
        <span className='linkTitle'>Quick Guide</span>
        <li><a href="">Chauffuer</a></li>
        <li><a href="">Our Partners</a></li>
        <li><a href="">Destination</a></li>
        <li><a href="">Careers</a></li>
        <li><a href="">Transportation</a></li>
        <li><a href="">Program Rules</a></li>
      </div>
    </div>
  
  );
}

export default Footer;
