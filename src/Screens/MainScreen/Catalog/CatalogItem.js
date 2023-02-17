import CatalogLabel from "./CatalogLabel";
import CatalogTitle from "./CatalogTitle";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import modeAtom from "../../../Stores/Classroom/mode";

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
    // setSelectedCatalog({
    //   label: coverImage.split(".jpg")[0],
    //   title: data.title
    // });
    // setModalOpen(true);
    setMode("word");
    setCurrentWordPage(1);
    setCurrentPage(0);
    navigate(`/demo/${data.level}`);
  };
  return (
    <div className={`relative drop-shadow-lg`}>
      <img
        loading={"lazy"}
        src={`/assets/images/covers/${coverImage}`}
        alt={`${coverImage}`}
        className={`h-[288px] w-full object-cover rounded-lg border-4 border-[transparent] cursor-pointer hover:border-4 hover:border-[#47C7D2] transition duration-200 ease-in-out
        `}
        onClick={onClickCatalogItem}
      />
      <CatalogLabel label={coverImage.split(".jpg")[0]} />
      <CatalogTitle data={data} />
    </div>
  );
};

export default CatalogItem;
