import styled from "styled-components";

const TextBookDownloadsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextBookDownloadsTitle = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    font-weight: bold;
    font-size: 20px;
    color: white;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 4px;
  }
`;

const TextBookDownload = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    font-size: 18px;
    color: #515151;
    font-weight: 400;
    padding: 3px 0;
    &:nth-child(2) {
      margin-top: 24px;
    }
  }
`;

export { TextBookDownloadsContainer, TextBookDownloadsTitle, TextBookDownload };
