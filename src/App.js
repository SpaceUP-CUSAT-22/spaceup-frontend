import React from "react"
import 'animate.css';
import NavBar from "./sss-components/navbar";
import Home from "./sss-components/home"
import Mission from "./sss-components/mission";
import About from "./sss-components/about";
import Events from "./sss-components/event";
import GallerySection from "./sss-components/gallery";
import Footer from "./sss-components/footer"

function App() {
  return (
    <div className="flex flex-col w-screen">
      <NavBar/>
      <Home/>
      <Mission/>
      <About/>
      <Events/>
      <GallerySection/>
      <Footer/>
     
   
    </div>
  );
}

export default App;
