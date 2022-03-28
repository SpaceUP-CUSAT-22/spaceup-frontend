import videosrc from '../Assets/home-video.mp4';

const Video = () => {
    return (
        <div className="h-screen w-full">
            <video autoPlay controls >
                <source src={videosrc} type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;