import styled from "styled-components";

const RecordingEnvironmentContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    margin: 12px 0 30px 0;
  }
  @media (min-width: 1280px) {
    margin: 12px 0 30px 0;
  }
`;

const RecordingEnvironmentTitleContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }
`;

const RecordingEnvironmentTitle = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    margin-left: 10px;
  }
  @media (min-width: 1280px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    margin-left: 10px;
  }
`;

const RecordingEnvironmentList = styled.ol`
  @media (min-width: 768px) and (max-width: 1279px) {
    list-style: decimal;
    padding-left: 20px;
  }
  @media (min-width: 1280px) {
    list-style: decimal;
    padding-left: 20px;
  }
`;

const RecordingEnvironmentListItem = styled.li`
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 18px;
    margin: 4px 0;
    ${({ accented }) => accented && `color: #EC1C47;`}
  }
  @media (min-width: 1280px) {
    font-size: 18px;
    margin: 4px 0;
    ${({ accented }) => accented && `color: #EC1C47;`}
  }
`;

export {
  RecordingEnvironmentContainer,
  RecordingEnvironmentTitleContainer,
  RecordingEnvironmentTitle,
  RecordingEnvironmentList,
  RecordingEnvironmentListItem
};
