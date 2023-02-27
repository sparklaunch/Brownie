import styled from "styled-components";

const SwiperSlideImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export { SwiperSlideImage };
