import "./Home.css";
import {useState, useEffect} from 'react';
import btn_bg from "../../Assets/btn-bg.svg";
import Typewriter from "typewriter-effect";

const Home = () => {

    return (
        <>
            <section id="hero">
                <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
                    <h1 className="typing mb-4 pb-0">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                .typeString("SPACE-UP CUSAT <br/> 2021")
                                .start();
                            }}
                        />
                        </h1>
                    <p className="mb-4 pb-0">10-12 December, Downtown Conference Center, New York</p>
                    {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a> */}
                    <a href="#about" className="about-btn scrollto">
                        <img src={btn_bg} alt=""/><span>Register Now</span></a>
                </div>
            </section>
        </>
    );

}

export default Home;