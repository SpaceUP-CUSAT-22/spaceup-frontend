import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Event from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import {Milestone} from "./Components/Milestone/Milestone";
import Footer from "./Components/Footer/footer";
import Speakers from "./Components/Speakers/Speakers";
import SeatMap from "./Components/Registration/seatmap";

const Main = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Event /> 
            <Milestone />
            <Team />
            <Speakers />
            <Gallery />
            {/* <Footer />
            <SeatMap /> */}
        </>
    );
}

export default Main;