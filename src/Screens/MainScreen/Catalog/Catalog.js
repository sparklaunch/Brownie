import CatalogHeader from "./CatalogHeader";
import CatalogList from "./CatalogList";
import { CatalogInnerContainer, CatalogOuterContainer } from "./CatalogStyles";

const Catalog = () => {
  return (
    <CatalogOuterContainer>
      <CatalogInnerContainer>
        <CatalogHeader />
        {/*<CatalogFilter />*/}
        <CatalogList />
      </CatalogInnerContainer>
    </CatalogOuterContainer>
  );
};

export default Catalog;
