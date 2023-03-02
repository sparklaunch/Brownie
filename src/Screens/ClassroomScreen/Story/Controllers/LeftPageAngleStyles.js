import styled from "styled-components";

const LeftPageAngleContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 47px;
    height: 47px;
    background-color: #1ab9c5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    ${(props) =>
      props.disabled ? `opacity: 0.5;` : `opacity: 1; cursor: pointer;`}
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 47px;
    height: 47px;
    background-color: #1ab9c5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    ${(props) =>
      props.disabled ? `opacity: 0.5;` : `opacity: 1; cursor: pointer;`}
  }
  @media screen and (min-width: 993px) {
    width: 47px;
    height: 47px;
    background-color: #1ab9c5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    ${(props) =>
      props.disabled ? `opacity: 0.5;` : `opacity: 1; cursor: pointer;`}
  }
`;

const LeftPageAngleImage = styled.img`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
  }
`;

export { LeftPageAngleContainer, LeftPageAngleImage };
