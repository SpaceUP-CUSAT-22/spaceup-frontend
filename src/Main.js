import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Event from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import {Milestone} from "./Components/Milestone/Milestone";
import Footer from "./Components/SSS/footer";
import Speakers from "./Components/Speakers/Speakers";

import { useRef, useEffect, useState } from "react";
const Main = () => {
    const mainBody = useRef();
    const [scroll, setScroll] = useState(0);
    let activeScroll = 0;
    let currentActive = 0;

    useEffect(() => {
    window.addEventListener("scroll", () => {
        activeScroll =  window.scrollY;
        
        for(let i=1; i<mainBody.current.children.length; i++){
            currentActive = mainBody.current.children[i];
            console.log(activeScroll, currentActive.offsetTop, currentActive.offsetTop + currentActive.offsetHeight, i);
            if(activeScroll >= currentActive.offsetTop - 50 && activeScroll <= (currentActive.offsetTop + currentActive.offsetHeight)) {
                setScroll(i-1);
            }
        }

    });
    }, []) ;
    

    return (
        <>
        <div ref={mainBody}>
            <Navbar scroll={scroll}/>
            <Home />
            <About />
            <Event /> 
            <Milestone />
            <Team />
            <Speakers />
            <Gallery />
            <Footer />
        </div>
            
        </>
    );
}

export default Main;