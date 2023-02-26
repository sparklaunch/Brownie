import { useParams } from "react-router-dom";
import bookTitles from "../../../data.json";
import { CardTitleText, CardTitleTextSpan } from "./CardTitleStyles";

const CardTitle = () => {
  const { level } = useParams();
  const bookTitlesString = JSON.stringify(bookTitles);
  const bookTitlesObject = JSON.parse(bookTitlesString);
  const title = bookTitlesObject.find((book) => book.level === level).title;
  return (
    <CardTitleText>
      PFR Lv {level} <CardTitleTextSpan>{title}</CardTitleTextSpan>
    </CardTitleText>
  );
};

export default CardTitle;
