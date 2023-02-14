import { useParams } from "react-router-dom";
import bookTitles from "../../../data.json";

const CardTitle = () => {
  const { level } = useParams();
  const bookTitlesString = JSON.stringify(bookTitles);
  const bookTitlesObject = JSON.parse(bookTitlesString);
  const title = bookTitlesObject.find((book) => book.level === level).title;
  return (
    <p className={`text-[18px]`}>
      PFR Lv {level}{" "}
      <span className={`font-[Jua] text-[26px] ml-3`}>{title}</span>
    </p>
  );
};

export default CardTitle;
