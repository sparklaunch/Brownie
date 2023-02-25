import styled from "styled-components";

const AdministratorSignInFormContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 32px 0;
    margin-top: 50px;
    width: 400px;
  }
  @media (min-width: 993px) {
    padding: 32px 0;
    margin-top: 50px;
    width: 400px;
  }
`;

const AdministratorSignInTitle = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 32px;
    text-align: center;
    margin: 32px 0;
  }
  @media (min-width: 993px) {
    font-size: 32px;
    text-align: center;
    margin: 32px 0;
  }
`;

export { AdministratorSignInFormContainer, AdministratorSignInTitle };
