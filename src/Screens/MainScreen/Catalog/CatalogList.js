import CatalogLevel from "./CatalogLevel";
import bookTitles from "../../../data.json";
import { CatalogListContainer } from "./CatalogListStyles";

const CatalogList = () => {
  const titles = JSON.parse(JSON.stringify(bookTitles));
  let titlesByLevel = [];
  for (const level of Array(5).keys()) {
    const filteredTitles = titles.filter((title) => {
      return title.level[0] === `${level + 1}`;
    });
    titlesByLevel.push(filteredTitles);
  }
  return (
    <CatalogListContainer>
      <CatalogLevel level={1} maxUnit={8} data={titlesByLevel[0]} />
      <CatalogLevel level={2} maxUnit={5} data={titlesByLevel[1]} />
      <CatalogLevel level={3} maxUnit={4} data={titlesByLevel[2]} />
      <CatalogLevel level={4} maxUnit={4} data={titlesByLevel[3]} />
      <CatalogLevel level={5} maxUnit={4} data={titlesByLevel[4]} />
    </CatalogListContainer>
  );
};

export default CatalogList;
