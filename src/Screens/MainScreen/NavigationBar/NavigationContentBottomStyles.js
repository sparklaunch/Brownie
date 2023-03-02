import styled from "styled-components";

const NavigationContentBottomContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

const NavigationLink = styled.p`
  @media (480px <= width <= 767px) {
    margin-right: 24px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    color: ${(props) => (props.accented ? "#1ab9c5" : "#222222")};
  }
  @media (768px <= width <= 992px) {
    margin-right: 24px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    color: ${(props) => (props.accented ? "#1ab9c5" : "#222222")};
  }
  @media (width >= 993px) {
    margin-right: 24px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    color: ${(props) => (props.accented ? "#1ab9c5" : "#222222")};
  }
`;

export { NavigationContentBottomContainer, NavigationLink };
