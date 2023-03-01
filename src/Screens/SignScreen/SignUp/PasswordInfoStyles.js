import styled from "styled-components";

const PasswordInfoOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    margin-bottom: 12px;
  }
  @media (768px <= width <= 992px) {
    margin-bottom: 12px;
  }
  @media (width >= 993px) {
    margin-bottom: 12px;
  }
`;

const PasswordInfoInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const InfoIcon = styled.img`
  @media (480px <= width <= 767px) {
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const PasswordInfoText = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 13px;
    margin-left: 8px;
    ${(props) => (props.validPassword ? `color: #acacac;` : `color: red;`)}
  }
  @media (768px <= width <= 992px) {
    font-size: 13px;
    margin-left: 8px;
    ${(props) => (props.validPassword ? `color: #acacac;` : `color: red;`)}
  }
  @media (width >= 993px) {
    font-size: 13px;
    margin-left: 8px;
    ${(props) => (props.validPassword ? `color: #acacac;` : `color: red;`)}
  }
`;

export {
  PasswordInfoOuterContainer,
  PasswordInfoInnerContainer,
  InfoIcon,
  PasswordInfoText
};
