import styled from "styled-components";

const YouDidItTextContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const YouDidItTextImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
  }
`;

export { YouDidItTextContainer, YouDidItTextImage };
