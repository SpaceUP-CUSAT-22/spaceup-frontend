import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Event from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import Milestone from "./Components/Milestone/Milestone";
import Footer from "./Components/Footer/footer";
import SeatMap from "./Components/Registration/seatmap";

const Main = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Event /> 
            <Milestone />
            <Gallery />
            {/* <Footer />
            <SeatMap /> */}
        </>
    );
}

export default Main;