import styled from "styled-components";

const RecordingInstructionsContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin: 24px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 24px 0;
  }
  @media screen and (min-width: 993px) {
    margin: 24px 0;
  }
`;

const RecordingInstructionsTitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }
`;

const RecordingInstructionsTitle = styled.p`
  @media screen and (max-width: 767px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    margin-left: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    margin-left: 10px;
  }
  @media screen and (min-width: 993px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    margin-left: 10px;
  }
`;

const RecordingInstructionsList = styled.ol`
  @media screen and (max-width: 767px) {
    list-style: decimal;
    padding-left: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    list-style: decimal;
    padding-left: 20px;
  }
  @media screen and (min-width: 993px) {
    list-style: decimal;
    padding-left: 20px;
  }
`;

const RecordingInstructionsListItem = styled.li`
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.5;
    margin: 4px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
    margin: 4px 0;
  }
  @media screen and (min-width: 993px) {
    font-size: 18px;
    margin: 4px 0;
  }
`;

const SnowflakeIcon = styled.img`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
  }
`;

export {
  RecordingInstructionsContainer,
  RecordingInstructionsTitleContainer,
  RecordingInstructionsTitle,
  RecordingInstructionsList,
  RecordingInstructionsListItem,
  SnowflakeIcon
};
