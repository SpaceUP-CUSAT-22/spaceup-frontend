import "./Button.css";
import { Link } from 'react-router-dom';
import btn_bg from "../../Assets/btn-bg.svg";

const Button = ({ name, route }) => {
    return (
        <>
            <Link to={route} className="about-btn scrollto">
                <img src={btn_bg} alt="" />
                <span>{name}</span>
            </Link>
        </>
    );
}

export default Button