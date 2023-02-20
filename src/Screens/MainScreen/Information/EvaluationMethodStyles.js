import styled from "styled-components";

const EvaluationMethodContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
`;

const EvaluationMethodTitle = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 20px;
    flex-shrink: 0;
    padding: 12px 20px;
    border-radius: 8px;
    background-color: #1ab9c5;
    color: white;
    display: inline-block;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    flex-shrink: 0;
    padding: 12px 20px;
    border-radius: 8px;
    background-color: #1ab9c5;
    color: white;
    display: inline-block;
  }
`;

const EvaluationMethodDescription = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 18px;
    margin-left: 16px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
    margin-left: 16px;
  }
`;

export {
  EvaluationMethodContainer,
  EvaluationMethodTitle,
  EvaluationMethodDescription
};
