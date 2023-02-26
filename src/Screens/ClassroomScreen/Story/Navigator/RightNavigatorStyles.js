import styled from "styled-components";

const RightNavigatorContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    background-color: #1ab9c5;
    display: inline-block;
    padding: 16px 12px;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    cursor: pointer;
    margin-left: 12px;
  }
  @media (min-width: 993px) {
    background-color: #1ab9c5;
    display: inline-block;
    padding: 16px 12px;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    cursor: pointer;
    margin-left: 12px;
  }
`;

const RightNavigatorImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
  }
`;

export { RightNavigatorContainer, RightNavigatorImage };
