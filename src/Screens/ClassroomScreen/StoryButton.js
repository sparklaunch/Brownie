const StoryButton = () => {
  return (
    <div
      className={`w-[100px] h-[100px] bg-white flex flex-col items-center justify-center rounded-lg shadow-md border-[3px] border-[transparent] cursor-pointer hover:border-[3px] hover:border-[#47C7D2] transition duration-200 ease-in-out`}
    >
      <img src={"/assets/images/icons/story_icon.svg"} alt={"Story Icon"} />
      <p className={`font-[Jua] text-[20px]`}>Story</p>
    </div>
  );
};

export default StoryButton;
