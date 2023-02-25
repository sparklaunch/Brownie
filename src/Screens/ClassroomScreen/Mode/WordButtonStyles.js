import styled from "styled-components";

const WordButtonOuterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 12px;
  }
  @media (min-width: 993px) {
    margin-bottom: 12px;
  }
`;

const WordButtonInnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    width: 100px;
    height: 100px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: all 0.2s ease-in-out;
    ${(props) => props.enabled && `cursor: pointer;`}
    ${(props) => props.activated && `border: 3px solid #47C7D2;`}
  }
  @media (min-width: 993px) {
    width: 100px;
    height: 100px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: all 0.2s ease-in-out;
    ${(props) => props.enabled && `cursor: pointer;`}
    ${(props) => props.activated && `border: 3px solid #47C7D2;`}
  }
`;

const WordButtonImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
  }
`;

const WordButtonText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    ${(props) => props.activated && `color: #1AB9C5;`}
  }
  @media (min-width: 993px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    ${(props) => props.activated && `color: #1AB9C5;`}
  }
`;

export {
  WordButtonOuterContainer,
  WordButtonInnerContainer,
  WordButtonImage,
  WordButtonText
};
