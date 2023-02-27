import styled from "styled-components";

const RecordingEnvironmentContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    margin: 12px 0 30px 0;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    margin: 12px 0 30px 0;
  }
`;

const RecordingEnvironmentTitleContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }
`;

const RecordingEnvironmentTitle = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    margin-left: 10px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    margin-left: 10px;
  }
`;

const RecordingEnvironmentList = styled.ol`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    list-style: decimal;
    padding-left: 20px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    list-style: decimal;
    padding-left: 20px;
  }
`;

const RecordingEnvironmentListItem = styled.li`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 18px;
    margin: 4px 0;
    ${({ accented }) => accented && `color: #EC1C47;`}
  }
  @media (min-width: 993px) and (min-height: 768px) {
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
