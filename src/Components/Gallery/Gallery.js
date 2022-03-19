import "./Gallery.css";
import "bootstrap/dist/css/bootstrap.css";

const Gallery = () => {
  return (
    <>
      <div className="gallery-parent">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Gallery</h2>
            <p>Check our gallery from the recent events</p>
          </div>
        </div>

        <div className="gallery-slider swiper-container">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <a href="../../Assets/gallery/1.jpg" class="gallery-lightbox">
                <img
                  src="../../Assets/gallery/1.jpg"
                  class="img-fluid"
                  alt=""
                />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="../../Assets/gallery/2.jpg" class="gallery-lightbox">
                <img
                  src="../../Assets/gallery/2.jpg"
                  class="img-fluid"
                  alt=""
                />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="../../Assets/gallery/3.jpg" class="gallery-lightbox">
                <img
                  src="../../Assets/gallery/3.jpg"
                  class="img-fluid"
                  alt=""
                />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="../../Assets/gallery/4.jpg" class="gallery-lightbox">
                <img
                  src="../../Assets/gallery/4.jpg"
                  class="img-fluid"
                  alt=""
                />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="../../Assets/gallery/5.jpg" class="gallery-lightbox">
                <img
                  src="../../Assets/gallery/5.jpg"
                  class="img-fluid"
                  alt=""
                />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="../../Assets/gallery/6.jpg" class="gallery-lightbox">
                <img
                  src="../../Assets/gallery/6.jpg"
                  class="img-fluid"
                  alt=""
                />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="../../Assets/gallery/7.jpg" class="gallery-lightbox">
                <img
                  src="../../Assets/gallery/7.jpg"
                  class="img-fluid"
                  alt=""
                />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="../../Assets/gallery/8.jpg" class="gallery-lightbox">
                <img
                  src="../../Assets/gallery/8.jpg"
                  class="img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
