import styled from "styled-components";

const TextbooksSpecimenContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const TextbooksImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 36px;
    width: 400px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 993px) {
    margin-bottom: 36px;
    width: 400px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const TextbooksTitleText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    color: #999999;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  @media (min-width: 993px) {
    color: #999999;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
  }
`;

const TextbooksTextContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    text-align: center;
  }
  @media (min-width: 993px) {
    text-align: center;
  }
`;

const TextbooksText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    color: #999999;
    font-size: 16px;
  }
  @media (min-width: 993px) {
    color: #999999;
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
