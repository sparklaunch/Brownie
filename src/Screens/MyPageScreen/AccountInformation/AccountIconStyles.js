import styled from "styled-components";

const AccountIconContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 993px) {
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const AccountLockIcon = styled.img`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
  }
`;

export { AccountIconContainer, AccountLockIcon };
