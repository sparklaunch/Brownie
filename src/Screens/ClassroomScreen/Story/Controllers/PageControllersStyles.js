import styled from "styled-components";

const PageControllersContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    transform: scale(0.8) translateX(10%);
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: row;
    transform: scale(0.8) translateX(10%);
  }
`;

const FirstPageText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    color: white;
    padding: 10px 20px;
    background-color: #1ab9c5;
    border-radius: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-right: 20px;
    ${(props) => props.available && `cursor: pointer;`}
  }
  @media (min-width: 993px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    color: white;
    padding: 10px 20px;
    background-color: #1ab9c5;
    border-radius: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-right: 20px;
    ${(props) => props.available && `cursor: pointer;`}
  }
`;

const PageAnglesContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: row;
  }
`;

const LeftPageAngleWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
  }
`;

const CurrentPageText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
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
  @media (min-width: 993px) {
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
  @media (min-width: 768px) and (max-width: 992px) {
    position: relative;
    font-size: 20px;
    margin-left: 4px;
    top: 2px;
  }
  @media (min-width: 993px) {
    position: relative;
    font-size: 20px;
    margin-left: 4px;
    top: 2px;
  }
`;

const RightPageAngleWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
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
