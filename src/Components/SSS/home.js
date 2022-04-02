import React,{useState,useEffect} from "react";
import './sss.css';
import Fade from 'react-reveal/Fade';
// import Button from "../Elements/Button";
import Pulse from "react-reveal/Pulse";


import Logo from "../../Assets/sssAssets/logo.png";
import Spot from "../../sss-assets/sss_spot_registration.png"

export default function Home() {
    

    const [showModal,setShowModal]=useState(false)

    const handleModal=()=>{
        setShowModal(!showModal)
    }
    useEffect(()=>{

        setTimeout(()=>{
            handleModal()
          
        },8000)

   

    },[])

    return (
        <>
        <div id="Shome" className="min-h-screen flex flex-col justify-center items-center text-center bg-sh-mobile sm:bg-sh-tablet md:bg-sh bg-no-repeat bg-fixed bg-cover pt-10">
            <img src={Logo} className="w-48 py-4 mx-auto pt-5" width={1622} height={1622} alt="SpaceUP logo" />
            <h1 className="py-3 text-white font-bold text-4xl md:text-5xl lg:text-6xl font-nasa tracking-wider linear-wipe">INDULGE IN THE UNKNOWN AND BEYOND</h1>
            <Fade bottom duration={1000} delay={1000}>
                <p className="text-gray-50 text-xl md:text-xl pb-2">The Official Pre Event of Spaceup CUSAT</p>
            </Fade>
            <Fade bottom duration={1000} delay={1000}>
                <p className="text-gray-50 font-medium text-2xl">April 3rd 2022 at Seminar Complex, CUSAT</p>
            </Fade>
            <Fade bottom duration={1000} delay={1000}>
                <p className="text-gray-400 text-sm">For bulk booking for school students, Contact : <a className="no-underline text-gray-300 hover:text-gray-400" href="tel:+919447476081">94474 76081</a></p>
            </Fade>
            <Pulse forever={false}>
                <a className="home-register-btn" href="/sss">Register Closed</a>
        
            </Pulse>
        </div>

        {showModal&&<div className="flex flex-col items-center justify-center  w-screen h-screen bg-black/70 bg-blur-2xl fixed top-0 left-0 bottom-20 z-50">
            <div className="bg-white rounded-lg  md:w-1/5 h-3/4">
                <div>

                    
                </div>
                <img src={Spot} className="w-full h-full"/>
                <button className="text-white font-bold text-xl cursor-pointer bg-none top-20 right-25 absolute z-40" onClick={()=>{handleModal()}}>X</button>
            </div>
        </div>}

        </>
    )

}   