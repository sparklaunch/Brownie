import styled from "styled-components";

const BookContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BookContentContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const ModeButtonsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

const LeftPageTurnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    bottom: 30px;
    left: 50px;
  }
`;

const RightPageTurnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    bottom: 30px;
    right: 50px;
  }
`;

const PageControllersContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
`;

export {
  BookContainer,
  BookContentContainer,
  ModeButtonsContainer,
  LeftPageTurnerContainer,
  RightPageTurnerContainer,
  PageControllersContainer
};
