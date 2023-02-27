import styled from "styled-components";

const StoryButtonContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    width: 80px;
    height: 80px;
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

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
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

  @media (width >= 993px) and (height >= 768px) {
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

const StoryButtonImage = styled.img`
  @media (width <= 767px), (height <= 479px) {
    width: 40px;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (width >= 993px) and (height >= 768px) {
  }
`;

const StoryButtonText = styled.p`
  @media (width <= 767px), (height <= 479px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    ${(props) => props.activated && `color: #1AB9C5;`}
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    ${(props) => props.activated && `color: #1AB9C5;`}
  }

  @media (width >= 993px) and (height >= 768px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    ${(props) => props.activated && `color: #1AB9C5;`}
  }
`;

export { StoryButtonContainer, StoryButtonImage, StoryButtonText };
