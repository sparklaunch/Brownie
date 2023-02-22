import styled from "styled-components";

const JumbotronTitleContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    height: 480px;
    background-image: url("assets/images/jumbotron.svg");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const TitleContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 44px 16px;
  }
  @media (min-width: 1280px) {
    position: relative;
    top: -50px;
    margin-bottom: 54px;
  }
`;

const Title = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 30px;
    font-family: GmarketSans, sans-serif;
    font-weight: bold;
    line-height: 48px;
    letter-spacing: -0.2px;
    color: white;
  }
  @media (min-width: 1280px) {
    font-size: 40px;
    font-weight: bold;
    line-height: 48px;
    letter-spacing: -0.2px;
    color: white;
    font-family: GmarketSans, sans-serif;
  }
`;

const ButtonContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    transform: scale(0.8) translateX(-80px);
  }
`;

export { JumbotronTitleContainer, TitleContainer, Title, ButtonContainer };
