import BookContent from "./BookContent";

const Book = () => {
  return (
    <div
      className={`absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center`}
    >
      <div
        className={`w-[70vw] h-[46vw] bg-white rounded-lg shadow-2xl overflow-clip`}
      >
        <BookContent />
      </div>
    </div>
  );
};

export default Book;
