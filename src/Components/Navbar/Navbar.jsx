import React, { useState } from 'react';
import {SiConsul} from "react-icons/si";
import {BsPhoneVibrate} from "react-icons/bs";
import {AiOutlineGlobal} from "react-icons/ai";
import {CgMenuGridO} from "react-icons/cg";


const Navbar = () => {
    const [active, setActive]=useState('navBarMenu')
    const showNavBar=()=>{
        setActive('navBarMenu showNavBar')
    }
    const hideNavBar=()=>{
        setActive('navBarMenu')
    }

    //Add bgc while scrolling

    const [bgc, setBgc]=useState('navBarTwo')
    const setBackground=()=>{
      if(window.scrollY>=10){
        setBgc('navBarTwo navbar_With_Bg')
      }
      else{
        setBgc('navBarTwo')
      }
    }

    window.addEventListener('scroll',setBackground)

  return (
    <div className='navBar flex'>
      <div className='navBarOne flex'>
        <div><SiConsul className='icon'/></div>

        <div className='none flex'>
            <li className='flex'><BsPhoneVibrate className='icon'/>Support</li>
            <li className='flex'><AiOutlineGlobal className='icon'/>Languages</li>
        </div>

        <div className='atb flex'>
            <span>Sign in </span>
            <span>Sign out</span>
        </div>
      </div>
      <div className='navBarTwo flex'>

      </div>
      <div className={bgc}>
        <div className='logoDiv'>
            <img className='Logo' src='src/assets/imgLogo.png'/>
        </div>
        <div className={active}>
            <ul className='menu flex'>
                <li onClick={hideNavBar} className='listItem'>Home</li>
                <li onClick={hideNavBar}  className='listItem'>About</li>
                <li onClick={hideNavBar}  className='listItem'>Offers</li>
                <li onClick={hideNavBar}  className='listItem'>Seats</li>
                <li onClick={hideNavBar}  className='listItem'>Destinations</li>
            </ul>
            <button className='btn flex btnOne'>Contact</button>
        </div>
        {/* <button className='btn flex btnTwo'>Contact</button> */}
        <div onClick={showNavBar} className='toggleIcon '><CgMenuGridO className='icon'/></div>
      </div>
    </div>
  );
}

export default Navbar;
