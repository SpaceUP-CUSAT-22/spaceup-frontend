import React from "react"
import NavBar from "./components/navbar";
import Home from "./components/home"
import Mission from "./components/mission";
import About from "./components/about";
import Events from "./components/event";
import GallerySection from "./components/gallery";
import Footer from "./components/footer"


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
