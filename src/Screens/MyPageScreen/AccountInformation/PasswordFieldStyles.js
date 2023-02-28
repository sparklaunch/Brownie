import styled from "styled-components";

const PasswordFieldContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 24px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 24px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 24px;
  }
`;

export { PasswordFieldContainer };
