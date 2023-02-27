import styled from "styled-components";

const AdministratorSignInFormContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export { AdministratorSignInFormContainer };
