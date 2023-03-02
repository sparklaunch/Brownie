import styled from "styled-components";

const PasswordInfoOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 993px) {
    margin-bottom: 12px;
  }
`;

const PasswordInfoInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const InfoIcon = styled.img`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
  }
`;

const PasswordInfoText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 13px;
    margin-left: 8px;
    ${(props) => (props.validPassword ? `color: #acacac;` : `color: red;`)}
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 13px;
    margin-left: 8px;
    ${(props) => (props.validPassword ? `color: #acacac;` : `color: red;`)}
  }
  @media screen and (min-width: 993px) {
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
