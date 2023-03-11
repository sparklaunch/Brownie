import CatalogItem from "./CatalogItem";
import {
  CatalogLevelContainer,
  CatalogLevelGridContainer,
  CatalogLevelLabel,
  CatalogLevelLabelContainer,
  SnowflakeIcon
} from "./CatalogLevelStyles";

const CatalogLevel = ({ level, maxUnit, data }) => {
  const coverImages = Array.from(Array(maxUnit).keys()).map((unit) => {
    // Array.from(Array(maxUnit).keys())는 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]와 같은 배열을 만듭니다. 노가다나 하드코딩을 꺼릴 때 자주 사용되는 코드 스니핏입니다.
    return `${level}-${unit + 1}.jpg`;
  });
  return (
    <CatalogLevelContainer>
      <CatalogLevelLabelContainer>
        <SnowflakeIcon
          src={"assets/images/icons/snowflake_icon.svg"}
          alt={"Snowflake Icon"}
        />
        <CatalogLevelLabel>Level {level}</CatalogLevelLabel>
      </CatalogLevelLabelContainer>
      <CatalogLevelGridContainer>
        {coverImages.map((coverImage, index) => {
          // 커버 이미지 배열을 순회하면서 카탈로그 아이템 컴포넌트를 렌더링합니다.
          return (
            <CatalogItem
              coverImage={coverImage}
              data={data[index]}
              key={index}
              forDemo={
                coverImage.replace(".jpg", "") === `1-1` ||
                coverImage.replace(".jpg", "") === `2-1`
              } // 데모용으로 레벨 1-1과 2-1만 렌더링합니다.
            />
          );
        })}
      </CatalogLevelGridContainer>
    </CatalogLevelContainer>
  );
};

export default CatalogLevel;
