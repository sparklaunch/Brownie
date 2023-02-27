import styled from "styled-components";

const TryInformationContainer = styled.div`
  @media (width <= 767px) {
    width: 100%;
    padding: 30px;
    background-color: #f9f9f9;
    border: 2px solid #dfdfdf;
    border-radius: 20px;
    margin: 12px 0;
  }

  @media (768px <= width <= 992px) {
    width: 100%;
    padding: 30px;
    background-color: #f9f9f9;
    border: 2px solid #dfdfdf;
    border-radius: 20px;
    margin: 12px 0;
  }

  @media (width >= 993px) {
    width: 100%;
    padding: 30px;
    background-color: #f9f9f9;
    border: 2px solid #dfdfdf;
    border-radius: 20px;
    margin: 36px 0;
  }
`;

const TryInformationItem = styled.div`
  @media (width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
  }

  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
  }

  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
  }
`;

const TryInformationItemText = styled.p`
  @media (width <= 767px) {
    font-size: 20px;
    margin-left: 20px;
  }

  @media (768px <= width <= 992px) {
    font-size: 20px;
    margin-left: 20px;
  }

  @media (width >= 993px) {
    font-size: 20px;
    margin-left: 20px;
  }
`;

const CheckImage = styled.img`
  @media (width <= 767px) {
  }

  @media (768px <= width <= 992px) {
  }

  @media (width >= 993px) {
  }
`;

export {
  TryInformationContainer,
  TryInformationItem,
  TryInformationItemText,
  CheckImage
};
