import BookContent from "./BookContent";

const Book = () => {
  return (
    <div
      className={`absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center`}
    >
      <div className={`w-[1264px] h-[838px] bg-white rounded-lg shadow-2xl`}>
        <BookContent />
      </div>
    </div>
  );
};

export default Book;
