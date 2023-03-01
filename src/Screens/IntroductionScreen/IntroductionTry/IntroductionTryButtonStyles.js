import styled from "styled-components";

const IntroductionTryButtonContainer = styled.p`
  @media (480px <= width <= 767px) {
    display: inline-block;
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 24px;
    padding: 16px;
    text-align: center;
    border: 2px solid white;
    border-radius: 10px;
    cursor: pointer;
  }
  @media (768px <= width <= 992px) {
    display: inline-block;
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 24px;
    padding: 20px 100px;
    border: 2px solid white;
    border-radius: 10px;
    cursor: pointer;
  }
  @media (width >= 993px) {
    display: inline-block;
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 24px;
    padding: 20px 100px;
    border: 2px solid white;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export { IntroductionTryButtonContainer };
