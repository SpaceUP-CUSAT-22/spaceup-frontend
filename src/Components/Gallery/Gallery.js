import "./Gallery.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";

import image1 from "../../Assets/gallery/1.jpg";
import image2 from "../../Assets/gallery/2.jpg";
import image3 from "../../Assets/gallery/3.jpg";
import image4 from "../../Assets/gallery/4.jpg";
import image5 from "../../Assets/gallery/5.jpg";
import image6 from "../../Assets/gallery/6.jpg";
import image7 from "../../Assets/gallery/7.jpg";
import image8 from "../../Assets/gallery/8.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

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

        <Swiper
          spaceBetween={40}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={image1} class="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} class="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} class="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} class="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} class="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image6} class="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image7} class="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image8} class="img-fluid" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;
