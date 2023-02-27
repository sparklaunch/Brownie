import styled from "styled-components";

const AdministratorSignInFormContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    padding: 32px 0;
    margin-top: 50px;
    width: 400px;
  }
  @media (width >= 993px) and (height >= 768px) {
    padding: 32px 0;
    margin-top: 50px;
    width: 400px;
  }
`;

const AdministratorSignInTitle = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 32px;
    text-align: center;
    margin: 32px 0;
  }
  @media (width >= 993px) and (height >= 768px) {
    font-size: 32px;
    text-align: center;
    margin: 32px 0;
  }
`;

export { AdministratorSignInFormContainer, AdministratorSignInTitle };
