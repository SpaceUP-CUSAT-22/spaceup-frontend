import "./Home.css";
import {useState, useEffect} from 'react';
import btn_bg from "../../Assets/btn-bg.svg";


const Home = () => {

    return (
        <>
            <section id="hero">
                <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
                    <h1 className="mb-4 pb-0">SPACE UP CUSAT <br/> 2021</h1>
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