import "./Star.css";
import star1 from "../../Assets/stars/const1.png";
import star2 from "../../Assets/stars/const2.png";

const Star = () => {
    return (
        <div className="stars">
            <img className="star1" src={star1} alt="about" />
            <img className="star2" src={star2} alt="about" />
        </div>
    );
}

export default Star