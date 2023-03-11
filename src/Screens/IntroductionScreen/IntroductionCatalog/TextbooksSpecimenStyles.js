import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const TextbooksSpecimenContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const TextbooksImage = styled.img`
  @media screen and (max-width: 767px) {
    margin-bottom: 36px;
    width: 400px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 36px;
    width: 400px;
  }
  @media screen and (min-width: 993px) {
    margin-bottom: 36px;
    width: 400px;
  }
`;

const TextbooksTitleText = styled.p`
  @media screen and (max-width: 767px) {
    color: ${Constants.ASH};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: ${Constants.ASH};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 993px) {
    color: ${Constants.ASH};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
  }
`;

const TextbooksTextContainer = styled.div`
  @media screen and (max-width: 767px) {
    text-align: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    text-align: center;
  }
  @media screen and (min-width: 993px) {
    text-align: center;
  }
`;

const TextbooksText = styled.p`
  @media screen and (max-width: 767px) {
    color: ${Constants.ASH};
    line-height: 1.5;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: ${Constants.ASH};
    font-size: 15px;
  }
  @media screen and (min-width: 993px) {
    color: ${Constants.ASH};
    font-size: 16px;
  }
`;

export {
  TextbooksSpecimenContainer,
  TextbooksImage,
  TextbooksTitleText,
  TextbooksTextContainer,
  TextbooksText
};
