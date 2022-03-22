import React,{useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-scroll"

import Logo from "../assets/logo.png"

export default function NavBar(){

    const [menu,setShowMenu]=useState(false)

    const handleClick=()=>{
        setShowMenu(!menu)
    }




    return <div className="flex font-sans w-full fixed z-50 justify-center font-medium   top-0 right-0 backdrop-blur-lg lg:backdrop-blur-sm  right-0 lg:p-8">
    




    {menu&&<div className="flex flex-col items-center justify-center w-full min-h-screen space-y-3 text-4xl text-white text-center lg:hidden">
    
    <h2 className="cursor-pointer font-bold"><Link  to="home" spy={true} smooth={true} onClick={handleClick}>Home</Link></h2>
    <h2 className="cursor-pointer font-bold"><Link to="mission" spy={true} smooth={true} onClick={handleClick}>Our Mission</Link></h2>
    <h2 className="cursor-pointer font-bold"><Link to="about" spy={true} smooth={true} onClick={handleClick}>About Us</Link></h2>
    <h2 className="cursor-pointer font-bold"><Link to="event" spy={true} smooth={true} onClick={handleClick}>Flagship Events</Link></h2>
    <h2 className="cursor-pointer font-bold"><Link to="gallery" spy={true} smooth={true} onClick={handleClick}>Gallery</Link></h2>
    
    </div>
    
}
    <h1 className="flex cursor-pointer text-2xl absolute right-0 p-4 mr-2 lg:hidden" onClick={handleClick}>
    {menu?<CloseIcon style={{color:"#fff",fontSize:"2.5rem"}}/>:<MenuIcon  style={{color:"#fff",fontSize:"2.5rem"}}/>}
    </h1>

    <div className="hidden lg:flex space-x-12 mr-3 justify-self-end text-gray-50  text-2xl">
    <h2 className="cursor-pointer "><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></h2>
    <h2 className="cursor-pointer "><Link to="mission" spy={true} smooth={true}>Our Mission</Link></h2>
    <h2 className="cursor-pointer "><Link to="about" spy={true} smooth={true}>About Us</Link></h2>
    <h2 className="cursor-pointer "><Link to="event" spy={true} smooth={true}>Flagship Events</Link></h2>
    <h2 className="cursor-pointer "><Link to="gallery" spy={true} smooth={true}>Gallery</Link></h2>
    </div>


    
    </div>

}