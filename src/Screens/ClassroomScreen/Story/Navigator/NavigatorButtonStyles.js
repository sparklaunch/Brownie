import styled from "styled-components";

const NavigatorButtonOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.5s ease-in-out;
    ${(props) => (props.open ? `top: 216px;` : `top: 0;`)}
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: fixed;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.5s ease-in-out;
    ${(props) => (props.open ? `top: 216px;` : `top: 0;`)}
  }

  @media screen and (min-width: 993px) {
    position: fixed;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.5s ease-in-out;
    ${(props) => (props.open ? `top: 216px;` : `top: 0;`)}
  }
`;

const NavigatorButtonInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #1ab9c5;
    padding: 8px 40px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #1ab9c5;
    padding: 8px 40px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #1ab9c5;
    padding: 8px 40px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
  }
`;

const PagesText = styled.p`
  @media screen and (max-width: 767px) {
    color: white;
    font-size: 18px;
    margin-right: 12px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: white;
    font-size: 18px;
    margin-right: 12px;
  }

  @media screen and (min-width: 993px) {
    color: white;
    font-size: 18px;
    margin-right: 12px;
  }
`;

const CaretImage = styled.img`
  @media screen and (max-width: 767px) {
    transition: all 0.5s ease-in-out;
    ${(props) => props.open && `transform: rotate(180deg);`};
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    transition: all 0.5s ease-in-out;
    ${(props) => props.open && `transform: rotate(180deg);`};
  }

  @media screen and (min-width: 993px) {
    transition: all 0.5s ease-in-out;
    ${(props) => props.open && `transform: rotate(180deg);`};
  }
`;

export {
  NavigatorButtonOuterContainer,
  NavigatorButtonInnerContainer,
  PagesText,
  CaretImage
};
