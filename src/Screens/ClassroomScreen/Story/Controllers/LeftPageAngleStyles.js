import styled from "styled-components";

const LeftPageAngleContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    width: 47px;
    height: 47px;
    background-color: #1ab9c5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-right: 8px;
    ${(props) =>
      props.disabled ? `opacity: 0.5;` : `opacity: 1; cursor: pointer;`}
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 47px;
    height: 47px;
    background-color: #1ab9c5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-right: 8px;
    ${(props) =>
      props.disabled ? `opacity: 0.5;` : `opacity: 1; cursor: pointer;`}
  }

  @media (width >= 993px) and (height >= 768px) {
    width: 47px;
    height: 47px;
    background-color: #1ab9c5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-right: 8px;
    ${(props) =>
      props.disabled ? `opacity: 0.5;` : `opacity: 1; cursor: pointer;`}
  }
`;

const LeftPageAngleImage = styled.img`
  @media (width <= 767px), (height <= 479px) {
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }

  @media (width >= 993px) and (height >= 768px) {
  }
`;

export { LeftPageAngleContainer, LeftPageAngleImage };
