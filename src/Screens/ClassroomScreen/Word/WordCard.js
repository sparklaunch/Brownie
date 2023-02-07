import Word from "./Word";

const WordCard = () => {
  return (
    <div className={`absolute left-[50%] translate-x-[-50%] translate-y-[16%]`}>
      <div
        className={`w-[52vw] h-[36vw] border-[24px] border-[#FFD53D] rounded-lg`}
      >
        <Word />
      </div>
    </div>
  );
};

export default WordCard;
