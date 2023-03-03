import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const EvaluationMethodContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
`;

const EvaluationMethodTitle = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 20px;
    flex-shrink: 0;
    padding: 12px 20px;
    border-radius: 8px;
    background-color: ${Constants.ACCENT_COLOR};
    color: white;
    display: inline-block;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 20px;
    flex-shrink: 0;
    padding: 12px 20px;
    border-radius: 8px;
    background-color: ${Constants.ACCENT_COLOR};
    color: white;
    display: inline-block;
  }
  @media screen and (min-width: 993px) {
    font-size: 20px;
    flex-shrink: 0;
    padding: 12px 20px;
    border-radius: 8px;
    background-color: ${Constants.ACCENT_COLOR};
    color: white;
    display: inline-block;
  }
`;

const EvaluationMethodDescription = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.5;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
    margin-left: 16px;
  }
  @media screen and (min-width: 993px) {
    font-size: 18px;
    margin-left: 16px;
  }
`;

const EvaluationMethodDescriptionSpan = styled.span`
  @media screen and (max-width: 767px) {
    color: ${Constants.ACCENT_COLOR};
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: ${Constants.ACCENT_COLOR};
  }
  @media screen and (min-width: 993px) {
    color: ${Constants.ACCENT_COLOR};
  }
`;

export {
  EvaluationMethodContainer,
  EvaluationMethodTitle,
  EvaluationMethodDescription,
  EvaluationMethodDescriptionSpan
};
