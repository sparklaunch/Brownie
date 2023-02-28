import StatusLabels from "./StatusLabels";
import {
  RecentlyReadBooksContainer,
  RecentlyReadBooksText
} from "./RecentlyReadBooksStyles";

const RecentlyReadBooks = () => {
  return (
    <>
      <RecentlyReadBooksText>최근 읽은 책</RecentlyReadBooksText>
      <StatusLabels />
      <RecentlyReadBooksContainer></RecentlyReadBooksContainer>
    </>
  );
};

export default RecentlyReadBooks;
