import styled from "styled-components";

const LoadingCardContainer = styled.div`
  @media screen and (max-width: 767px) {
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

  @media screen and (min-width: 768px) and (max-width: 992px) {
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

  @media screen and (min-width: 993px) {
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
  @media screen and (max-width: 767px) {
    transform: scale(0.5);
    animation: rotating 1s ease-in-out infinite alternate;
    @keyframes rotating {
      from {
        transform: rotate(-60deg);
      }
      to {
        transform: rotate(60deg);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    transform: scale(0.5);
    animation: rotating 1s ease-in-out infinite alternate;
    @keyframes rotating {
      from {
        transform: rotate(-60deg);
      }
      to {
        transform: rotate(60deg);
      }
    }
  }

  @media screen and (min-width: 993px) {
    transform: scale(0.5);
    animation: rotating 1s ease-in-out infinite alternate;
    @keyframes rotating {
      from {
        transform: rotate(-60deg);
      }
      to {
        transform: rotate(60deg);
      }
    }
  }
`;

const LoadingText = styled.p`
  @media screen and (max-width: 767px) {
    font-weight: bold;
    font-size: 13px;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-weight: bold;
    font-size: 13px;
    margin-top: 20px;
  }

  @media screen and (min-width: 993px) {
    font-weight: bold;
    font-size: 13px;
    margin-top: 20px;
  }
`;

export { LoadingCardContainer, RotatingDocument, LoadingText };
