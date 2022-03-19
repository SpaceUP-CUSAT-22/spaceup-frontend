import "./Home.css";
import {Link} from 'react-router-dom';
import btn_bg from "../../Assets/btn-bg.svg";
import Typewriter from "typewriter-effect";

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

export const Button = ({name, route}) => {
return(
    <>
        <Link to={route} className="about-btn scrollto">
            <img src={btn_bg} alt=""/>
            <span>{name}</span>
        </Link>
    </>
);
}

export default Home;