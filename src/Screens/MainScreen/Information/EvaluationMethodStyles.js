import styled from "styled-components";

const EvaluationMethodContainer = styled.div`
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
  @media (768px <= width <= 992px) {
    font-size: 18px;
    margin-left: 16px;
  }
  @media (width >= 993px) {
    font-size: 18px;
    margin-left: 16px;
  }
`;

export {
  EvaluationMethodContainer,
  EvaluationMethodTitle,
  EvaluationMethodDescription
};
