import styled from "styled-components";

const CatalogLabelContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
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
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 993px) {
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
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const CatalogLabelText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    color: white;
    font-size: 14px;
  }
  @media (min-width: 993px) {
    color: white;
    font-size: 14px;
  }
`;

export { CatalogLabelContainer, CatalogLabelText };
