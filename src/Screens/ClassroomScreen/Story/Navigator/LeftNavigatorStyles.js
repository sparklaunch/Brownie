import styled from "styled-components";

const LeftNavigatorContainer = styled.div`
  @media (width <= 767px) {
    background-color: #1ab9c5;
    display: inline-block;
    padding: 16px 12px;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    cursor: pointer;
    margin-right: 12px;
  }

  @media (768px <= width <= 992px) {
    background-color: #1ab9c5;
    display: inline-block;
    padding: 16px 12px;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    cursor: pointer;
    margin-right: 12px;
  }

  @media (width >= 993px) {
    background-color: #1ab9c5;
    display: inline-block;
    padding: 16px 12px;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    cursor: pointer;
    margin-right: 12px;
  }
`;

const LeftNavigatorImage = styled.img`
  @media (width <= 767px) {
  }

  @media (768px <= width <= 992px) {
  }

  @media (width >= 993px) {
  }
`;

export { LeftNavigatorContainer, LeftNavigatorImage };
