import "./Home.css";
import Typewriter from "typewriter-effect";
import Button from "../Elements/Button";

const Home = () => {

    return (
        <>
            <section id="home">
                <div className="home-container" data-aos="zoom-in" data-aos-delay="100">
                    <h1 className="typing mb-4 pb-0">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                .typeString("SPACE-UP CUSAT<br/>2022")
                                .start();
                            }}
                        />
                        </h1>
                    <p className="mb-0 pb-0">Pre-event on 3rd April 2022, Venue Seminar complex</p>
                    <Button name="Register Now" route="/login"/>
                </div>
            </section>
        </>
    );

}

export default Home;
