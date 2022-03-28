import videosrc from '../Assets/home-video.mp4';
import "./video.css";
import { useRef } from 'react';

const Video = () => {
    const videoRef = useRef();

    return (
        <div className="video-parent">
            <video
                src={videosrc}
                controls
                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
            ></video>
        </div>
    );
};

export default Video;