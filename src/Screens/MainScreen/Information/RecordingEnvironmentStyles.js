import styled from "styled-components";

const RecordingEnvironmentContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin: 12px 0 30px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 12px 0 30px 0;
  }
  @media screen and (min-width: 993px) {
    margin: 12px 0 30px 0;
  }
`;

const RecordingEnvironmentTitleContainer = styled.div`
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

const RecordingEnvironmentTitle = styled.p`
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

const RecordingEnvironmentList = styled.ol`
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

const RecordingEnvironmentListItem = styled.li`
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.5;
    margin: 4px 0;
    ${({ accented }) => accented && `color: #EC1C47;`}
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
    margin: 4px 0;
    ${({ accented }) => accented && `color: #EC1C47;`}
  }
  @media screen and (min-width: 993px) {
    font-size: 18px;
    margin: 4px 0;
    ${({ accented }) => accented && `color: #EC1C47;`}
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
  RecordingEnvironmentContainer,
  RecordingEnvironmentTitleContainer,
  RecordingEnvironmentTitle,
  RecordingEnvironmentList,
  RecordingEnvironmentListItem,
  SnowflakeIcon
};
