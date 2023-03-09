import { useParams } from "react-router-dom";
import bookTitles from "../../../data.json";
import { BookTitleText, BookTitleTextSpan } from "./BookTitleStyles";

const BookTitle = () => {
  const { level } = useParams();
  const bookTitlesString = JSON.stringify(bookTitles);
  const bookTitlesObject = JSON.parse(bookTitlesString);
  const title = bookTitlesObject.find((book) => book.level === level).title; // 해당 레벨의 책 제목을 찾습니다.
  return (
    <BookTitleText>
      PFR Lv {level} <BookTitleTextSpan>{title}</BookTitleTextSpan>
    </BookTitleText>
  );
};

export default BookTitle;
