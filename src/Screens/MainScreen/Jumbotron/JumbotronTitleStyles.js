import styled from "styled-components";

const JumbotronTitleContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    height: 480px;
    background-image: url("assets/images/jumbotron.svg");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const TitleContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 44px 16px;
  }
  @media (min-width: 993px) {
    position: relative;
    top: -50px;
    margin-bottom: 54px;
  }
`;

const Title = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 30px;
    font-family: GmarketSans, sans-serif;
    font-weight: bold;
    line-height: 48px;
    letter-spacing: -0.2px;
    color: white;
  }
  @media (min-width: 993px) {
    font-size: 40px;
    font-weight: bold;
    line-height: 48px;
    letter-spacing: -0.2px;
    color: white;
    font-family: GmarketSans, sans-serif;
  }
`;

const DemoButton = styled.button`
  @media (min-width: 768px) and (max-width: 992px) {
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
  @media (min-width: 993px) {
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
`;

const ButtonContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    transform: scale(0.8) translateX(-80px);
  }
`;

export {
  DemoButton,
  JumbotronTitleContainer,
  TitleContainer,
  Title,
  ButtonContainer
};
