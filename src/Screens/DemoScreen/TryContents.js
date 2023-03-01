import CatalogItem from "../MainScreen/Catalog/CatalogItem";
import {
  TryContentsInnerContainer,
  TryContentsOuterContainer
} from "./TryContentsStyles";

const TryContents = () => {
  return (
    <TryContentsOuterContainer>
      <TryContentsInnerContainer>
        <CatalogItem
          coverImage={"1-1.jpg"}
          data={{
            level: "1-1",
            title: "Ant, Bug and Cat"
          }}
          clickable={false}
          forDemo={true}
        />
        <CatalogItem
          coverImage={"2-1.jpg"}
          data={{
            level: "2-1",
            title: "Dan and the Ram"
          }}
          clickable={false}
          forDemo={true}
        />
      </TryContentsInnerContainer>
    </TryContentsOuterContainer>
  );
};

export default TryContents;
