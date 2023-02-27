import styled from "styled-components";

const EmptyThumbnailPlaceholder = styled.div`
  @media (width <= 767px), (height <= 479px) {
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }

  @media (width >= 993px) and (height >= 768px) {
  }
`;

export { EmptyThumbnailPlaceholder };
