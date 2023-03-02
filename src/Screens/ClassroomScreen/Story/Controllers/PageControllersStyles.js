import styled from "styled-components";

const PageControllersContainer = styled.div`
  @media (width <= 767px) {
    display: flex;
    flex-direction: row;
    transform: scale(0.8) translateX(10%);
  }

  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    transform: scale(0.8) translateX(10%);
  }

  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    transform: scale(0.8) translateX(10%);
  }
`;

const FirstPageText = styled.p`
  @media (width <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    color: white;
    padding: 10px 20px;
    background-color: #1ab9c5;
    border-radius: 50px;
    margin-right: 20px;
    ${(props) => props.available && `cursor: pointer;`}
  }
  @media (768px <= width <= 992px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    color: white;
    padding: 10px 20px;
    background-color: #1ab9c5;
    border-radius: 50px;
    margin-right: 20px;
    ${(props) => props.available && `cursor: pointer;`}
  }
  @media (width >= 993px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    color: white;
    padding: 10px 20px;
    background-color: #1ab9c5;
    border-radius: 50px;
    margin-right: 20px;
    ${(props) => props.available && `cursor: pointer;`}
  }
`;

const PageAnglesContainer = styled.div`
  @media (width <= 767px) {
    display: flex;
    flex-direction: row;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
  }
`;

const LeftPageAngleWrapper = styled.div`
  @media (width <= 767px) {
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const CurrentPageText = styled.p`
  @media (width <= 767px) {
    background-color: white;
    border: 1px solid #1ab9c5;
    border-radius: 50px;
    width: 120px;
    display: flex;
    flex-direction: row;
    font-size: 28px;
    align-items: center;
    justify-content: center;
  }

  @media (768px <= width <= 992px) {
    background-color: white;
    border: 1px solid #1ab9c5;
    border-radius: 50px;
    width: 120px;
    display: flex;
    flex-direction: row;
    font-size: 28px;
    align-items: center;
    justify-content: center;
  }

  @media (width >= 993px) {
    background-color: white;
    border: 1px solid #1ab9c5;
    border-radius: 50px;
    width: 120px;
    display: flex;
    flex-direction: row;
    font-size: 28px;
    align-items: center;
    justify-content: center;
  }
`;

const PageNumberSpan = styled.span`
  @media (width <= 767px) {
    position: relative;
    font-size: 20px;
    margin-left: 4px;
    top: 2px;
  }

  @media (768px <= width <= 992px) {
    position: relative;
    font-size: 20px;
    margin-left: 4px;
    top: 2px;
  }

  @media (width >= 993px) {
    position: relative;
    font-size: 20px;
    margin-left: 4px;
    top: 2px;
  }
`;

const RightPageAngleWrapper = styled.div`
  @media (width <= 767px) {
  }

  @media (768px <= width <= 992px) {
  }

  @media (width >= 993px) {
  }
`;

export {
  PageControllersContainer,
  FirstPageText,
  PageAnglesContainer,
  LeftPageAngleWrapper,
  CurrentPageText,
  PageNumberSpan,
  RightPageAngleWrapper
};
