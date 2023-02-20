import { CatalogTitleContainer, CatalogTitleText } from "./CatalogTitleStyles";

const CatalogTitle = ({ data }) => {
  const { title } = data;
  return (
    <CatalogTitleContainer>
      <CatalogTitleText>{title}</CatalogTitleText>
    </CatalogTitleContainer>
  );
};

export default CatalogTitle;
