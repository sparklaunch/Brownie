import CatalogLevel from "./CatalogLevel";
import bookTitles from "../../../data.json";
import { CatalogListContainer } from "./CatalogListStyles";

const CatalogList = () => {
  const titles = JSON.parse(JSON.stringify(bookTitles));
  let titlesByLevel = [];
  for (const level of Array(5).keys()) {
    // Array(5).keys()는 [0, 1, 2, 3, 4]와 같은 배열을 만듭니다. 노가다나 하드코딩을 꺼릴 때 자주 사용되는 코드 스니핏입니다.
    const filteredTitles = titles.filter((title) => {
      return title.level[0] === `${level + 1}`;
    }); // 레벨 1, 2, 3, 4, 5에 해당하는 책들을 각각 필터링합니다.
    titlesByLevel.push(filteredTitles); // 각 레벨에 해당하는 책들을 배열에 담습니다.
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
