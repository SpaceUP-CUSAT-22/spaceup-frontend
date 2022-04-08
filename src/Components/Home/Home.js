import "./Home.css";
// import Typewriter from "typewriter-effect";
import Button from "../Elements/Button";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade"

const Home = () => {

    return (
        <>
            <section id="home">
                <div className="home-container">
                    <Fade duration={1000} >
                        <h1 className="">
                            SPACEUP CUSAT 2022
                        </h1>
                    </Fade>
                    <Fade up duration={1000} delay={1000}>
                        <p className="font-bold text-white">9 April 2022 to 10 April 2022, at Seminar Complex, CUSAT</p>
                    </Fade>
                    <Pulse forever={true}>
                        <Button name="Register Now" cl="trans" route="https://rzp.io/l/spaceupcusat22" />
                        <Button name="Register (For SEDS Members)" cl="" route="https://rzp.io/l/sedsspaceupcusat" />
                    </Pulse>
                </div>
            </section>
        </>
    );

}

export default Home;
