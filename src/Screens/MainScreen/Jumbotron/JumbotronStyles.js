import styled from "styled-components";

const JumbotronOuterContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    background-color: rgb(70, 198, 210);
  }
  @media (width >= 993px) and (height >= 768px) {
    position: relative;
    height: 426px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const JumbotronInnerContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (width >= 993px) and (height >= 768px) {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const JumbotronFormContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: none;
  }
  @media (width >= 993px) and (height >= 768px) {
  }
`;

const JumbotronSwiperContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
  }
`;

export {
  JumbotronOuterContainer,
  JumbotronInnerContainer,
  JumbotronFormContainer,
  JumbotronSwiperContainer
};
