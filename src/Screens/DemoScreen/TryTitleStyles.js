import styled from "styled-components";

const TryTitleContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    margin: 48px 0 24px 0;
  }
  @media (min-width: 993px) {
    margin: 48px 0 24px 0;
  }
`;

const TryTitleText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 32px;
    font-family: Jua, sans-serif;
    text-align: center;
  }
  @media (min-width: 993px) {
    font-size: 32px;
    font-family: Jua, sans-serif;
    text-align: center;
  }
`;

export { TryTitleContainer, TryTitleText };
