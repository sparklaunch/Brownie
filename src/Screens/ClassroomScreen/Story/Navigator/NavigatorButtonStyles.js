import styled from "styled-components";

const NavigatorButtonOuterContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: fixed;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.5s ease-in-out;
    ${(props) => (props.open ? `top: 216px;` : `top: 0;`)}
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: fixed;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.5s ease-in-out;
    ${(props) => (props.open ? `top: 216px;` : `top: 0;`)}
  }

  @media (min-width: 993px) and (min-height: 768px) {
    position: fixed;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.5s ease-in-out;
    ${(props) => (props.open ? `top: 216px;` : `top: 0;`)}
  }
`;

const NavigatorButtonInnerContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #1ab9c5;
    padding: 8px 40px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    cursor: pointer;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #1ab9c5;
    padding: 8px 40px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    cursor: pointer;
  }

  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #1ab9c5;
    padding: 8px 40px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    cursor: pointer;
  }
`;

const PagesText = styled.p`
  @media (width <= 767px), (height <= 479px) {
    color: white;
    font-size: 18px;
    margin-right: 12px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    color: white;
    font-size: 18px;
    margin-right: 12px;
  }

  @media (min-width: 993px) and (min-height: 768px) {
    color: white;
    font-size: 18px;
    margin-right: 12px;
  }
`;

const CaretImage = styled.img`
  @media (width <= 767px), (height <= 479px) {
    transition: all 0.5s ease-in-out;
    ${(props) => props.open && `transform: rotate(180deg);`};
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    transition: all 0.5s ease-in-out;
    ${(props) => props.open && `transform: rotate(180deg);`};
  }

  @media (min-width: 993px) and (min-height: 768px) {
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
