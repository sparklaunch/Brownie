import styled from "styled-components";

const NavigationContainer = styled.div`
  @media (width <= 767px) {
    position: fixed;
    width: 100%;
    left: 0;
    background-color: #0c4a4e;
    z-index: 10;
    height: 216px;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${(props) => (props.open ? `top: 0;` : `top: -216px;`)}
  }
  @media (768px <= width <= 992px) {
    position: fixed;
    width: 100%;
    left: 0;
    background-color: #0c4a4e;
    z-index: 10;
    height: 216px;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${(props) => (props.open ? `top: 0;` : `top: -216px;`)}
  }
  @media (width >= 993px) {
    position: fixed;
    width: 100%;
    left: 0;
    background-color: #0c4a4e;
    z-index: 10;
    height: 216px;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${(props) => (props.open ? `top: 0;` : `top: -216px;`)}
  }
`;

export { NavigationContainer };
