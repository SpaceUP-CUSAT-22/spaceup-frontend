import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import bgimage from "./Assets/home-bg.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <div className="bg-home">
        <img src={bgimage} alt="" />
      </div>
      <Navbar />
      <Home />
      <About />
      <Gallery />
    </>
  );
}

export default App;
