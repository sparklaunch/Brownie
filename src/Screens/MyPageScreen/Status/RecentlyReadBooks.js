import StatusLabels from "./StatusLabels";
import {
  RecentlyReadBooksInnerContainer,
  RecentlyReadBooksOuterContainer,
  RecentlyReadBooksText
} from "./RecentlyReadBooksStyles";

const RecentlyReadBooks = () => {
  return (
    <RecentlyReadBooksOuterContainer>
      <RecentlyReadBooksText>최근 읽은 책</RecentlyReadBooksText>
      <StatusLabels />
      <RecentlyReadBooksInnerContainer></RecentlyReadBooksInnerContainer>
    </RecentlyReadBooksOuterContainer>
  );
};

export default RecentlyReadBooks;
