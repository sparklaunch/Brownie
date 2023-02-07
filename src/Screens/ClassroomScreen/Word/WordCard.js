import Word from "./Word";

const WordCard = () => {
  return (
    <div
      className={`absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center`}
    >
      <div
        className={`w-[52vw] h-[36vw] border-[40px] border-[#FFD53D] rounded-lg`}
      >
        <Word />
      </div>
    </div>
  );
};

export default WordCard;
