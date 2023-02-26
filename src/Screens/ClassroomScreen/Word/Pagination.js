import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import useData from "../../../Hooks/useData";
import { PaginationText, PaginationTextSpan } from "./PaginationStyles";

const Pagination = () => {
  const words = useData("words");
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  return (
    <PaginationText>
      {currentWordPage}
      <PaginationTextSpan>/{words.length}</PaginationTextSpan>
    </PaginationText>
  );
};

export default Pagination;
