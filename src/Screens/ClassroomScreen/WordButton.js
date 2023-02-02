const WordButton = () => {
  return (
    <div
      className={`w-[100px] h-[100px] bg-white flex flex-col items-center justify-center rounded-lg shadow-md border-[3px] border-[transparent] cursor-pointer hover:border-[3px] hover:border-[#47C7D2] transition duration-200 ease-in-out`}
    >
      <img src={"/assets/images/icons/word_icon.svg"} alt={"Word Icon"} />
      <p className={`font-[Jua] text-[20px]`}>Word</p>
    </div>
  );
};

export default WordButton;
