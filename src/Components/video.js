import videosrc from '../Assets/home-video.mp4';
import unmute from '../Assets/unmute.svg';
import mute from '../Assets/mute.svg';

import "./video.css";
import { useRef, useState } from 'react';

const Video = () => {
    const mutebtn = useRef();
    const [state, setState] = useState(false);

    const sound = () => {
        mutebtn.current.muted = !mutebtn.current.muted;
        setState(!state);
    }

    return (
        <div className="video-parent">
            <video
                ref={mutebtn}
                src={videosrc}
                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
            >
                
            </video>

            <div className="btn-vid" onClick={sound}>
                <img src={(state) ? unmute : mute } alt="unmute" />
            </div>
        </div>
    );
};

export default Video;