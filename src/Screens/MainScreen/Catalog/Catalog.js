import CatalogHeader from "./CatalogHeader";
import CatalogFilter from "./CatalogFilter";
import CatalogList from "./CatalogList";
import { CatalogInnerContainer, CatalogOuterContainer } from "./CatalogStyles";

const Catalog = () => {
  return (
    <CatalogOuterContainer>
      <CatalogInnerContainer>
        <CatalogHeader />
        <CatalogFilter />
        <CatalogList />
      </CatalogInnerContainer>
    </CatalogOuterContainer>
  );
};

export default Catalog;
