import styled from "styled-components";

const LoadingCardContainer = styled.div`
  @media (width <= 767px) {
    width: 220px;
    height: 170px;
    border-radius: 20px;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: scale(0.8);
  }

  @media (768px <= width <= 992px) {
    width: 220px;
    height: 170px;
    border-radius: 20px;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: scale(0.8);
  }

  @media (width >= 993px) {
    width: 220px;
    height: 170px;
    border-radius: 20px;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: scale(0.8);
  }
`;

const RotatingDocument = styled.img`
  @media (width <= 767px) {
    transform: scale(0.5);
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

  @media (768px <= width <= 992px) {
    transform: scale(0.5);
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

  @media (width >= 993px) {
    transform: scale(0.5);
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
  @media (width <= 767px) {
    font-weight: bold;
    font-size: 13px;
    margin-top: 20px;
  }

  @media (768px <= width <= 992px) {
    font-weight: bold;
    font-size: 13px;
    margin-top: 20px;
  }

  @media (width >= 993px) {
    font-weight: bold;
    font-size: 13px;
    margin-top: 20px;
  }
`;

export { LoadingCardContainer, RotatingDocument, LoadingText };
