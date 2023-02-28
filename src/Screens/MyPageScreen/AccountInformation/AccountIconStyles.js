import styled from "styled-components";

const AccountIconContainer = styled.div`
  @media (480px <= width <= 767px) {
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (768px <= width <= 992px) {
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) {
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const AccountLockIcon = styled.img`
  @media (480px <= width <= 767px) {
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

export { AccountIconContainer, AccountLockIcon };
