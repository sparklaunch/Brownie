import styled from "styled-components";

const JumbotronOuterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    background-color: rgb(70, 198, 210);
  }
  @media (min-width: 1280px) {
    height: 540px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(70, 198, 210);
    background-image: url("/assets/images/jumbotron.svg");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
`;

const JumbotronInnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const JumbotronFormContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
`;

export {
  JumbotronOuterContainer,
  JumbotronInnerContainer,
  JumbotronFormContainer
};
