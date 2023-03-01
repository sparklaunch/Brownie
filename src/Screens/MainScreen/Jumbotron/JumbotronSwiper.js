import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import {
  PFRLogo,
  SwiperSlideBottomContents,
  SwiperSlideContainer,
  SwiperSlideContentsContainer,
  SwiperSlideContentsInnerContainer,
  SwiperSlideContentsOuterContainer,
  SwiperSlideImage,
  SwiperSlideTopContents,
  SwiperSlideTopText
} from "./JumbotronSwiperStyles";
import "swiper/css";
import "swiper/css/pagination";
import JumbotronTitle from "./JumbotronTitle";
import { DemoButton } from "./JumbotronTitleStyles";
import { useNavigate } from "react-router-dom";

const JumbotronSwiper = () => {
  const mobile = window.innerWidth < 993;
  const navigate = useNavigate();
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={true}
      slidesPerView={1}
      loop={true}
      speed={1000}
      style={{ width: "100%", height: "100%" }}
      autoplay={true}
    >
      <SwiperSlide style={{ width: "100%", height: "100%" }}>
        <SwiperSlideContainer>
          <SwiperSlideImage
            loading={`lazy`}
            src={
              mobile
                ? `/assets/images/jumbotron/jumbotron_mobile1.png`
                : `/assets/images/jumbotron/jumbotron1.png`
            }
            alt={`Jumbotron 1`}
          />
          <SwiperSlideContentsOuterContainer>
            <SwiperSlideContentsInnerContainer>
              <JumbotronTitle />
            </SwiperSlideContentsInnerContainer>
          </SwiperSlideContentsOuterContainer>
        </SwiperSlideContainer>
      </SwiperSlide>
      <SwiperSlide style={{ width: "100%", height: "100%" }}>
        <SwiperSlideContainer>
          <SwiperSlideImage
            loading={`lazy`}
            src={
              mobile
                ? `/assets/images/jumbotron/jumbotron_mobile2.png`
                : `/assets/images/jumbotron/jumbotron2.png`
            }
            alt={`Jumbotron 2`}
          />
          <SwiperSlideContentsOuterContainer>
            <SwiperSlideContentsInnerContainer>
              <JumbotronTitle />
            </SwiperSlideContentsInnerContainer>
          </SwiperSlideContentsOuterContainer>
        </SwiperSlideContainer>
      </SwiperSlide>
      <SwiperSlide style={{ width: "100%", height: "100%" }}>
        <SwiperSlideContainer>
          <SwiperSlideImage
            loading={`lazy`}
            src={
              mobile
                ? `/assets/images/jumbotron/jumbotron_mobile3.png`
                : `/assets/images/jumbotron/jumbotron3.png`
            }
            alt={`Jumbotron 3`}
          />
          <SwiperSlideContentsOuterContainer>
            <SwiperSlideContentsInnerContainer>
              <SwiperSlideContentsContainer>
                <SwiperSlideTopContents>
                  <PFRLogo
                    src={`/assets/images/pfr_logo.png`}
                    alt={`PFR Logo`}
                  />
                  <SwiperSlideTopText>
                    파닉스 전용 교재
                    <br />
                    읽기 연습을 통한 파닉스 완성
                  </SwiperSlideTopText>
                </SwiperSlideTopContents>
                <SwiperSlideBottomContents>
                  <DemoButton onClick={() => navigate("/demo")}>
                    무료 체험
                  </DemoButton>
                </SwiperSlideBottomContents>
              </SwiperSlideContentsContainer>
            </SwiperSlideContentsInnerContainer>
          </SwiperSlideContentsOuterContainer>
        </SwiperSlideContainer>
      </SwiperSlide>
    </Swiper>
  );
};

export default JumbotronSwiper;
