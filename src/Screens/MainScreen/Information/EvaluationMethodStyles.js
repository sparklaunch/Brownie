import styled from "styled-components";

const EvaluationMethodContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
`;

const EvaluationMethodTitle = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 20px;
    flex-shrink: 0;
    padding: 12px 20px;
    border-radius: 8px;
    background-color: #1ab9c5;
    color: white;
    display: inline-block;
  }
  @media (min-width: 993px) and (min-height: 768px) {
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
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 18px;
    margin-left: 16px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    font-size: 18px;
    margin-left: 16px;
  }
`;

export {
  EvaluationMethodContainer,
  EvaluationMethodTitle,
  EvaluationMethodDescription
};
