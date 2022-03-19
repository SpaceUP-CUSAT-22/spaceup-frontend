import React,{useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default function NavBar(){

    const [menu,setShowMenu]=useState(false)

    const handleClick=()=>{
        setShowMenu(!menu)
    }




    return <div className="flex  w-screen fixed z-50 p-4 font-medium justify-between  backdrop-blur-lg lg:backdrop-blur-sm">
    
    <h1></h1>



    {menu&&<div className="flex flex-col items-center justify-center h-screen space-y-3 text-4xl text-white text-center font-bold lg:hidden">
    
    <h2 className="cursor-pointer">Our Mission</h2>
    <h2 className="cursor-pointer">About Us</h2>
    <h2 className="cursor-pointer">Flagship Events</h2>
    <h2 className="cursor-pointer">Gallery</h2>
    
    </div>
    
}
    <h1 className="flex cursor-pointer text-2xl mr-2 lg:hidden" onClick={handleClick}>
    {menu?<CloseIcon style={{color:"#fff",fontSize:"2.5rem"}}/>:<MenuIcon  style={{color:"#fff",fontSize:"2.5rem"}}/>}
    </h1>

    <div className="hidden lg:flex space-x-6 mr-3 justify-self-end text-gray-50  text-2xl">
    <h2 className="cursor-pointer text-underline">Our Mission</h2>
    <h2 className="cursor-pointer">About Us</h2>
    <h2 className="cursor-pointer">Flagship Events</h2>
    <h2 className="cursor-pointer">Gallery</h2>
    </div>


    
    </div>

}