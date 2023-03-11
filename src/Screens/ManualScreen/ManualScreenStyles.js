import styled from "styled-components";

const ManualScreenContainer = styled.div`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

const LeftPager = styled.img`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -30px;
    cursor: pointer;
    ${(props) => props.hidden && "display: none;"}
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -30px;
    cursor: pointer;
    ${(props) => props.hidden && "display: none;"}
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -30px;
    cursor: pointer;
    ${(props) => props.hidden && "display: none;"}
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -30px;
    cursor: pointer;
    ${(props) => props.hidden && "display: none;"}
  }
`;

const RightPager = styled.img`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -30px;
    cursor: pointer;
    ${(props) => props.hidden && "display: none;"}
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -30px;
    cursor: pointer;
    ${(props) => props.hidden && "display: none;"}
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -30px;
    cursor: pointer;
    ${(props) => props.hidden && "display: none;"}
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -30px;
    cursor: pointer;
    ${(props) => props.hidden && "display: none;"}
  }
`;

const ManualPageImage = styled.img`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export { ManualScreenContainer, LeftPager, RightPager, ManualPageImage };
