import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import { useParams } from "react-router-dom";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import { useRecoilState } from "recoil";
import resultsScreenShownAtom from "../../../Stores/Classroom/Story/resultsScreenShown";
import ResultsScreen from "./Results/ResultsScreen";

const BookContent = () => {
  const { level } = useParams();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const leftPageFile = `/assets/images/pages/${level}-${currentPage}.jpg`;
  const rightPageFile = `/assets/images/pages/${level}-${currentPage + 1}.jpg`;
  return (
    <div className={`relative`}>
      <div className={`grid grid-cols-2 gap-0 shadow-2xl rounded-2xl`}>
        <LeftPage fileName={leftPageFile} isEmpty={currentPage === 0} />
        <RightPage fileName={rightPageFile} isEmpty={currentPage === 10} />
      </div>
      {resultsScreenShown && <ResultsScreen />}
    </div>
  );
};

export default BookContent;
