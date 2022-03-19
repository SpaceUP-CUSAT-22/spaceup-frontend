import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Milestone from "./Components/Milestone/Milestone";
import Footer from "./Components/Footer/footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Gallery />
            <Milestone/>
            <Footer />
        </>
    );
}

export default Main;