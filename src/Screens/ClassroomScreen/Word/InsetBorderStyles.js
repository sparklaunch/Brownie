import styled from "styled-components";

const InsetBorderContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    width: 100%;
    height: 100%;
    border: 10px solid #ffd53d;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 100%;
    height: 100%;
    border: 10px solid #ffd53d;
  }

  @media (width >= 993px) and (height >= 768px) {
    width: 100%;
    height: 100%;
    border: 10px solid #ffd53d;
    border-radius: 20px;
  }
`;

export { InsetBorderContainer };
