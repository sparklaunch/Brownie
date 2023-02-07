const Word = () => {
  return (
    <div className={`h-full flex flex-row justify-center items-center`}>
      <img
        src={"/assets/images/icons/megaphone_button.svg"}
        alt={"Megaphone"}
        className={`cursor-pointer`}
      />
      <p className={`text-[120px] font-[900] ml-[24px]`}>ant</p>
    </div>
  );
};

export default Word;
