import styled from "styled-components";

const EvaluationMethodContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
`;

const EvaluationMethodTitle = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 20px;
    flex-shrink: 0;
    padding: 12px 20px;
    border-radius: 8px;
    background-color: #1ab9c5;
    color: white;
    display: inline-block;
  }
  @media (768px <= width <= 992px) {
    font-size: 20px;
    flex-shrink: 0;
    padding: 12px 20px;
    border-radius: 8px;
    background-color: #1ab9c5;
    color: white;
    display: inline-block;
  }
  @media (width >= 993px) {
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
  @media (480px <= width <= 767px) {
    font-size: 18px;
    margin-left: 16px;
  }
  @media (768px <= width <= 992px) {
    font-size: 18px;
    margin-left: 16px;
  }
  @media (width >= 993px) {
    font-size: 18px;
    margin-left: 16px;
  }
`;

const EvaluationMethodDescriptionSpan = styled.span`
  @media (480px <= width <= 767px) {
    color: #1ab9c5;
  }
  @media (768px <= width <= 992px) {
    color: #1ab9c5;
  }
  @media (width >= 993px) {
    color: #1ab9c5;
  }
`;

export {
  EvaluationMethodContainer,
  EvaluationMethodTitle,
  EvaluationMethodDescription,
  EvaluationMethodDescriptionSpan
};
