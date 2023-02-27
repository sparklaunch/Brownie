import styled from "styled-components";

const LoadingCardContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
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

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
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

  @media (min-width: 993px) and (min-height: 768px) {
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
  @media (width <= 767px), (height <= 479px) {
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

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
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

  @media (min-width: 993px) and (min-height: 768px) {
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
  @media (width <= 767px), (height <= 479px) {
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
  }

  @media (min-width: 993px) and (min-height: 768px) {
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
  }
`;

export { LoadingCardContainer, RotatingDocument, LoadingText };
