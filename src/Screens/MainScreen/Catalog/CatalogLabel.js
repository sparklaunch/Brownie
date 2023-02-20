import { CatalogLabelContainer, CatalogLabelText } from "./CatalogLabelStyles";

const CatalogLabel = ({ label }) => {
  return (
    <CatalogLabelContainer>
      <CatalogLabelText>Lv {label}</CatalogLabelText>
    </CatalogLabelContainer>
  );
};

export default CatalogLabel;
