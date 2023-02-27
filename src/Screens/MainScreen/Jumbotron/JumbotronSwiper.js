import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { SwiperSlideImage } from "./JumbotronSwiperStyles";
import "swiper/css";

const JumbotronSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      speed={1000}
      style={{ width: "100%", height: "100%" }}
      autoplay={true}
    >
      <SwiperSlide style={{ width: "100%", height: "100%" }}>
        <SwiperSlideImage
          loading={`lazy`}
          src={`/assets/images/jumbotron/jumbotron1.png`}
          alt={`Jumbotron 1`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideImage
          loading={`lazy`}
          src={`/assets/images/jumbotron/jumbotron2.png`}
          alt={`Jumbotron 2`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideImage
          loading={`lazy`}
          src={`/assets/images/jumbotron/jumbotron3.png`}
          alt={`Jumbotron 3`}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default JumbotronSwiper;
