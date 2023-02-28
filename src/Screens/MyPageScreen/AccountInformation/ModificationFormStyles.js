import styled from "styled-components";

const ModificationFormOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const ModificationFormInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    padding-top: 12px;
    width: 500px;
  }
  @media (768px <= width <= 992px) {
    padding-top: 12px;
    width: 500px;
  }
  @media (width >= 993px) {
    padding-top: 12px;
    width: 500px;
  }
`;

const TextCenterContainer = styled.div`
  @media (480px <= width <= 767px) {
    text-align: center;
  }
  @media (768px <= width <= 992px) {
    text-align: center;
  }
  @media (width >= 993px) {
    text-align: center;
  }
`;

export {
  ModificationFormOuterContainer,
  ModificationFormInnerContainer,
  TextCenterContainer
};
