const IntroductionHeader = () => {
  return (
    <div className={`flex flex-row justify-center`}>
      <div className={`w-[1200px] flex flex-col items-center p-[80px]`}>
        <img
          src={"/assets/images/rectangle.svg"}
          alt={"Rectangle Icon"}
          className={`mb-[16px]`}
        />
        <p className={`font-[Jua] text-[32px]`}>프로그램 소개</p>
      </div>
    </div>
  );
};

export default IntroductionHeader;
