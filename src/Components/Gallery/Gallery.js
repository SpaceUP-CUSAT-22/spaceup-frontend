import "./Gallery.css";
import Heading from "../Elements/Heading";

const img_urls = [
  'https://seds-cusat.github.io/Image-Hoster/gallery/DSC_0060.NEF-min.jpg',
  'https://seds-cusat.github.io/Image-Hoster/gallery/DSC_0064.NEF-min.jpg',
  'https://seds-cusat.github.io/Image-Hoster/gallery/DSC_0068.NEF-min.jpg',
  'https://seds-cusat.github.io/Image-Hoster/gallery/DSC_0198.NEF-min.jpg',
  'https://seds-cusat.github.io/Image-Hoster/gallery/DSC_0253.NEF-min.jpg',
  'https://seds-cusat.github.io/Image-Hoster/gallery/DSC_0268.NEF-min.jpg',
  'https://seds-cusat.github.io/Image-Hoster/gallery/DSC_0276.NEF-min.jpg',
  'https://seds-cusat.github.io/Image-Hoster/gallery/DSC_0290.NEF-min.jpg',
  'https://seds-cusat.github.io/Image-Hoster/gallery/DSC_0879-min.JPG',
];

const Gallery = () => {
  return (
    <>
      <div id="gallery">
        <div className="container">
          <Heading text={"GALLERY"} />
        </div>
        <div className="gallery-grid 
        container">
          {img_urls.map((url, index) => {
            return (
              <div className="gallery-image-container" key={index}><img src={url} alt="gallery-images" /></div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
