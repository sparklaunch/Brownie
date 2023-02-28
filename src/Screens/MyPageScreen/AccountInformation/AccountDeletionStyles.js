import styled from "styled-components";

const AccountDeletionText = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 12px;
    color: #acacac;
    cursor: pointer;
    text-align: right;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (768px <= width <= 992px) {
    font-size: 12px;
    color: #acacac;
    cursor: pointer;
    text-align: right;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (width >= 993px) {
    font-size: 12px;
    color: #acacac;
    cursor: pointer;
    text-align: right;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export { AccountDeletionText };
