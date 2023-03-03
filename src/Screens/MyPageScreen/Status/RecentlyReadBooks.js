import StatusLabels from "./StatusLabels";
import {
  RecentlyReadBooksInnerContainer,
  RecentlyReadBooksOuterContainer,
  RecentlyReadBooksPlaceholder,
  RecentlyReadBooksText
} from "./RecentlyReadBooksStyles";

const RecentlyReadBooks = () => {
  return (
    <RecentlyReadBooksOuterContainer>
      <RecentlyReadBooksText>최근 읽은 책</RecentlyReadBooksText>
      <StatusLabels />
      <RecentlyReadBooksInnerContainer>
        <RecentlyReadBooksPlaceholder>
          아직 읽은 책이 없습니다.
        </RecentlyReadBooksPlaceholder>
      </RecentlyReadBooksInnerContainer>
    </RecentlyReadBooksOuterContainer>
  );
};

export default RecentlyReadBooks;
