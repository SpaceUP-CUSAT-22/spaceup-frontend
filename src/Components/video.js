import videosrc from '../Assets/home-video.mp4';
import unmute from '../Assets/unmute.svg';
import mute from '../Assets/mute.svg';
import skip from '../Assets/skip.svg';

import "./video.css";
import { useRef, useState, useEffect} from 'react';

const Video = () => {
    const mutebtn = useRef();
    const [state, setState] = useState(false);

    useEffect(() => {
        // window.addEventListener('keypress', (event) => {
        //     if (event.key === 'Enter') {
        //         mutebtn.current.muted = !mutebtn.current.muted;
        //         setState(!state);
        //     }
        // })

        setTimeout(() => {
            window.location.href = 'https://spaceupcusat.org/sss';
        }, 15000)
    });

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
            >
                
            </video>

            <div className="btn-vid" onClick={sound}>
                <img src={(state) ? unmute : mute } alt="unmute" />
            </div>

            <div className='skip absolute bottom-10 right-10 bg-gray-300 px-4 py-2 rounded flex flex-row items-center justify-center'>
                <a className=' text-black hover:text-black no-underline' href="https://spaceupcusat.org/sss">Skip</a>
                <img className='h-8' src={skip} alt="skip"></img>
            </div>
        </div>
    );
};

export default Video;