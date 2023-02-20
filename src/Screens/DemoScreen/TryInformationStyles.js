import styled from "styled-components";

const TryInformationContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 100%;
    padding: 30px;
    background-color: #f9f9f9;
    border: 2px solid #dfdfdf;
    border-radius: 20px;
    margin: 12px 0;
  }
`;

const TryInformationItem = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
  }
`;

const TryInformationItemText = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 20px;
    margin-left: 20px;
  }
`;

export { TryInformationContainer, TryInformationItem, TryInformationItemText };
