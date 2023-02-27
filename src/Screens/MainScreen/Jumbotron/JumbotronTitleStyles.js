import styled from "styled-components";

const JumbotronTitleContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    height: 480px;
    background-image: url("assets/images/jumbotron.svg");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    height: 426px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const TitleContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    padding: 44px 16px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    position: relative;
    margin-bottom: 54px;
  }
`;

const Title = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 30px;
    font-family: GmarketSans, sans-serif;
    font-weight: bold;
    line-height: 48px;
    letter-spacing: -0.2px;
    color: white;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    font-size: 40px;
    font-weight: bold;
    line-height: 48px;
    letter-spacing: -0.2px;
    color: white;
    font-family: GmarketSans, sans-serif;
  }
`;

const DemoButton = styled.button`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: relative;
    font-family: Jua, sans-serif;
    font-size: 24px;
    color: white;
    letter-spacing: 1px;
    border: 1px solid white;
    width: 284px;
    height: 64px;
    bottom: -50px;
    background-color: #f34d7e;
    border-radius: 8px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    position: relative;
    font-family: Jua, sans-serif;
    font-size: 24px;
    color: white;
    letter-spacing: 1px;
    border: 1px solid white;
    width: 284px;
    height: 64px;
    background-color: #f34d7e;
    border-radius: 8px;
  }
`;

const ButtonContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    transform: scale(0.8) translateX(-80px);
  }
  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

export {
  DemoButton,
  JumbotronTitleContainer,
  TitleContainer,
  Title,
  ButtonContainer
};
