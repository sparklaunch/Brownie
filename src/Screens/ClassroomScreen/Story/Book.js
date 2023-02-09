import BookContent from "./BookContent";
import Microphones from "./Microphone/Microphones";
import YouDidItScreen from "./Results/YouDidItScreen";

const Book = () => {
  return (
    <div
      className={`absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center`}
    >
      <div
        className={`relative w-[70vw] h-[46vw] bg-white rounded-xl shadow-2xl overflow-clip`}
      >
        <BookContent />
        <YouDidItScreen />
      </div>
      <Microphones />
    </div>
  );
};

export default Book;
