import Heading from "../Elements/Heading";

const Map = () => {
    return (
        <>
            <iframe
                className="w-full h-screen"
                title="Seminar Complex CUSAT"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.674113541309!2d76.32259881479459!3d10.043727592821142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d223eeb1de1%3A0xce06a9f0d256857a!2sSeminar%20Complex!5e0!3m2!1sen!2sin!4v1648440268995!5m2!1sen!2sin"
                style={{ border: '0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
}

export default Map;