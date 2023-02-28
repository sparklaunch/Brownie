import styled from "styled-components";

const RecentlyReadBooksText = styled.div`
  @media (480px <= width <= 767px) {
    border-left: 4px solid #00aea8;
    padding-left: 12px;
    margin-bottom: 12px;
    font-size: 20px;
  }
  @media (768px <= width <= 992px) {
    border-left: 4px solid #00aea8;
    padding-left: 12px;
    margin-bottom: 12px;
    font-size: 20px;
  }
  @media (width >= 993px) {
    border-left: 4px solid #00aea8;
    padding-left: 12px;
    margin-bottom: 12px;
    font-size: 20px;
  }
`;

const RecentlyReadBooksContainer = styled.div`
  @media (480px <= width <= 767px) {
    height: 600px;
  }
  @media (768px <= width <= 992px) {
    height: 600px;
  }
  @media (width >= 993px) {
    height: 600px;
  }
`;

export { RecentlyReadBooksText, RecentlyReadBooksContainer };
