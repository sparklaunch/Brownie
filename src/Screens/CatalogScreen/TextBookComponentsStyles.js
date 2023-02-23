import styled from "styled-components";

const TextBookComponentsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextBookComponentsTitle = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 4px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-bottom: 24px;
  }
`;

export { TextBookComponentsContainer, TextBookComponentsTitle };
