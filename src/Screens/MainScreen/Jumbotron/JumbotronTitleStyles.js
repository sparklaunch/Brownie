import styled from "styled-components";

const JumbotronTitleContainer = styled.div`
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
    height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const TitleContainer = styled.div`
  @media (768px <= width <= 992px) {
    padding: 44px 16px;
  }
  @media (width >= 993px) {
    position: relative;
    margin-bottom: 54px;
  }
`;

const Title = styled.p`
  @media (768px <= width <= 992px) {
    font-size: 30px;
    font-family: GmarketSans, sans-serif;
    font-weight: bold;
    line-height: 48px;
    letter-spacing: -0.2px;
    color: white;
  }
  @media (width >= 993px) {
    font-size: 40px;
    font-weight: bold;
    line-height: 48px;
    letter-spacing: -0.2px;
    color: white;
    font-family: GmarketSans, sans-serif;
  }
`;

const DemoButton = styled.button`
  @media (768px <= width <= 992px) {
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
  @media (width >= 993px) {
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
  @media (768px <= width <= 992px) {
    transform: scale(0.8) translateX(-80px);
  }
  @media (width >= 993px) {
  }
`;

export {
  DemoButton,
  JumbotronTitleContainer,
  TitleContainer,
  Title,
  ButtonContainer
};
