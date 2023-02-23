import CatalogLabel from "./CatalogLabel";
import CatalogTitle from "./CatalogTitle";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import modeAtom from "../../../Stores/Classroom/mode";
import {
  CatalogItemContainer,
  CatalogItemImage,
  DemoRibbon
} from "./CatalogItemStyles";

const CatalogItem = ({
  coverImage,
  data,
  clickable = true,
  forDemo = false
}) => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [mode, setMode] = useRecoilState(modeAtom);
  const navigate = useNavigate();
  const onClickCatalogItem = () => {
    if (forDemo) {
      navigate(`/demo/${data.level}`);
      return;
    }
    if (!clickable) {
      return;
    }
    setMode("word");
    setCurrentWordPage(1);
    setCurrentPage(0);
    navigate(`/demo/${data.level}`);
  };
  return (
    <CatalogItemContainer>
      <CatalogItemImage
        loading={"lazy"}
        src={`/assets/images/covers/${coverImage}`}
        alt={`${coverImage}`}
        onClick={onClickCatalogItem}
      />
      {/*<HoverStroke />*/}
      {forDemo && (
        <DemoRibbon
          src={`/assets/images/demo_ribbon.png`}
          alt={`Demo Ribbon`}
        />
      )}
      <CatalogLabel label={coverImage.split(".jpg")[0]} />
      <CatalogTitle data={data} />
    </CatalogItemContainer>
  );
};

export default CatalogItem;
