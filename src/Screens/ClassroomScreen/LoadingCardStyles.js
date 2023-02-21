import styled from "styled-components";

const LoadingCardContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 300px;
    height: 200px;
    border-radius: 20px;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1280px) {
    width: 300px;
    height: 200px;
    border-radius: 20px;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const RotatingDocument = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
    animation: rotating 2s linear infinite;
    @keyframes rotating {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  @media (min-width: 1280px) {
    animation: rotating 2s linear infinite;
    @keyframes rotating {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

const LoadingText = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
  }
  @media (min-width: 1280px) {
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
  }
`;

export { LoadingCardContainer, RotatingDocument, LoadingText };
