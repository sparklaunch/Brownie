import styled from "styled-components";

const CatalogLabelContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: absolute;
    bottom: 40px;
    left: 8px;
    width: 67px;
    height: 27px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #1ab9c5;
    border-radius: 6px;
  }
  @media (768px <= width <= 992px) {
    position: absolute;
    bottom: 40px;
    left: 8px;
    width: 67px;
    height: 27px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #1ab9c5;
    border-radius: 6px;
  }
  @media (width >= 993px) {
    position: absolute;
    bottom: 40px;
    left: 8px;
    width: 67px;
    height: 27px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #1ab9c5;
    border-radius: 6px;
  }
`;

const CatalogLabelText = styled.p`
  @media (480px <= width <= 767px) {
    color: white;
    font-size: 14px;
  }
  @media (768px <= width <= 992px) {
    color: white;
    font-size: 14px;
  }
  @media (width >= 993px) {
    color: white;
    font-size: 14px;
  }
`;

export { CatalogLabelContainer, CatalogLabelText };
