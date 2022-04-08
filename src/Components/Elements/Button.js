import { Link } from 'react-router-dom';
import btn_bg from "../../Assets/btn-bg.svg";

const Button = ({ name, route, cl }) => {
    return (
        <>
            <a href={route} className={"about-btn scrollto " + cl}>
                <img src={btn_bg} alt="" />
                <span>{name}</span>
            </a>
        </>
    );
}

export default Button