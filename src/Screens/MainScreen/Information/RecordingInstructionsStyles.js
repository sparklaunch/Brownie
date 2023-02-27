import styled from "styled-components";

const RecordingInstructionsContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    margin: 24px 0;
  }
  @media (width >= 993px) and (height >= 768px) {
    margin: 24px 0;
  }
`;

const RecordingInstructionsTitleContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }
`;

const RecordingInstructionsTitle = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    margin-left: 10px;
  }
  @media (width >= 993px) and (height >= 768px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    margin-left: 10px;
  }
`;

const RecordingInstructionsList = styled.ol`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    list-style: decimal;
    padding-left: 20px;
  }
  @media (width >= 993px) and (height >= 768px) {
    list-style: decimal;
    padding-left: 20px;
  }
`;

const RecordingInstructionsListItem = styled.li`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 18px;
    margin: 4px 0;
  }
  @media (width >= 993px) and (height >= 768px) {
    font-size: 18px;
    margin: 4px 0;
  }
`;

export {
  RecordingInstructionsContainer,
  RecordingInstructionsTitleContainer,
  RecordingInstructionsTitle,
  RecordingInstructionsList,
  RecordingInstructionsListItem
};
