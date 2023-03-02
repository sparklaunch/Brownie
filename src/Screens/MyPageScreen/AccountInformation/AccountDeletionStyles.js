import styled from "styled-components";

const AccountDeletionText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 12px;
    color: #acacac;
    cursor: pointer;
    text-align: right;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 12px;
    color: #acacac;
    cursor: pointer;
    text-align: right;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 993px) {
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
