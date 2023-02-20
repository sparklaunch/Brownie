import styled from "styled-components";

const InsetBorderContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 100%;
    height: 100%;
    border: 10px solid #ffd53d;
  }
  @media (min-width: 1280px) {
    width: 100%;
    height: 100%;
    border: 10px solid #ffd53d;
    border-radius: 20px;
  }
`;

export { InsetBorderContainer };