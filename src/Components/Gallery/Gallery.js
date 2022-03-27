import "./Gallery.css";

import image1 from "../../Assets/gallery/1.jpg";
import image2 from "../../Assets/gallery/2.jpg";
import image3 from "../../Assets/gallery/3.jpg";
import image4 from "../../Assets/gallery/4.jpg";
import image5 from "../../Assets/gallery/5.jpg";
import image6 from "../../Assets/gallery/6.jpg";
import image7 from "../../Assets/gallery/7.jpg";
import image8 from "../../Assets/gallery/8.jpg";
import Heading from "../Elements/Heading";

const Gallery = () => {
  return (
    <>
      <div id="gallery">
        <div className="container">
          <Heading text={"GALLERY"} />
        </div>
        <div className="gallery-grid 
        container">
          <div className="gallery-image-container"><img src={image1} alt="" /></div>
          <div className="gallery-image-container"><img src={image2} alt="" /></div>
          <div className="gallery-image-container"><img src={image3} alt="" /></div>
          <div className="gallery-image-container"><img src={image4} alt="" /></div>
          <div className="gallery-image-container"><img src={image5} alt="" /></div>
          <div className="gallery-image-container"><img src={image6} alt="" /></div>
          <div className="gallery-image-container"><img src={image7} alt="" /></div>
          <div className="gallery-image-container"><img src={image8} alt="" /></div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
