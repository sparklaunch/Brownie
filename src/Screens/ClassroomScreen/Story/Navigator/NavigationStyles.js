import styled from "styled-components";

const NavigationContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: fixed;
    width: 100%;
    left: 0;
    background-color: #0c4a4e;
    z-index: 10;
    height: 216px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${(props) => (props.open ? `top: 0;` : `top: -216px;`)}
  }
  @media (min-width: 993px) {
    position: fixed;
    width: 100%;
    left: 0;
    background-color: #0c4a4e;
    z-index: 10;
    height: 216px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${(props) => (props.open ? `top: 0;` : `top: -216px;`)}
  }
`;

export { NavigationContainer };
