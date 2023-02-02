import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

const BookContent = () => {
  return (
    <div className={`grid grid-cols-2 gap-0`}>
      <LeftPage />
      <RightPage />
    </div>
  );
};

export default BookContent;
