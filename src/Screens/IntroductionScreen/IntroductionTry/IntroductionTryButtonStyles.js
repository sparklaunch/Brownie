import styled from "styled-components";

const IntroductionTryButtonContainer = styled.p`
  @media screen and (max-width: 767px) {
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
  @media screen and (min-width: 768px) and (max-width: 992px) {
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
  @media screen and (min-width: 993px) {
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
