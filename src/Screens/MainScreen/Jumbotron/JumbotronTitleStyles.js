import styled from "styled-components";

const JumbotronTitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin: 44px 16px 0 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 44px 16px 0 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 993px) {
    height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const TitleContainer = styled.div`
  @media screen and (max-width: 479px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    position: relative;
    margin-right: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: relative;
    margin-right: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 993px) {
    position: relative;
    margin-bottom: 54px;
  }
`;

const Title = styled.p`
  @media screen and (max-width: 479px) {
    font-size: 24px;
    font-weight: bold;
    line-height: 36px;
    margin-bottom: 50px;
    letter-spacing: -1px;
    color: white;
    font-family: GmarketSans, sans-serif;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    font-size: 24px;
    font-weight: bold;
    line-height: 36px;
    margin-bottom: 50px;
    letter-spacing: -1px;
    color: white;
    font-family: GmarketSans, sans-serif;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 30px;
    font-weight: bold;
    line-height: 36px;
    margin-bottom: 50px;
    letter-spacing: -0.2px;
    color: white;
    font-family: GmarketSans, sans-serif;
  }
  @media screen and (min-width: 993px) {
    font-size: 40px;
    font-weight: bold;
    line-height: 48px;
    letter-spacing: -0.2px;
    color: white;
    font-family: GmarketSans, sans-serif;
  }
`;

const DemoButton = styled.button`
  @media screen and (max-width: 767px) {
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
  @media screen and (min-width: 768px) and (max-width: 992px) {
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
  @media screen and (min-width: 993px) {
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
  @media screen and (max-width: 767px) {
    transform: scale(0.8) translateX(-40px);
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    transform: scale(0.8) translateX(-40px);
  }
  @media screen and (min-width: 993px) {
  }
`;

export {
  DemoButton,
  JumbotronTitleContainer,
  TitleContainer,
  Title,
  ButtonContainer
};
