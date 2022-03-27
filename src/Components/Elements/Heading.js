import './element.css';
import { Fade } from 'react-reveal';

const Heading = ({ text }) => {
    return (
        <Fade bottom>
            <div className="section-header">
                <h2>{text}</h2>
            </div>
        </Fade>
    );
}

export default Heading;