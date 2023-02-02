const TryInformation = () => {
  return (
    <div
      className={`w-full p-[40px] bg-[#F9F9F9] border-2 border-[#DFDFDF] rounded-xl my-12`}
    >
      <div className={`flex flex-row items-center justify-center py-1`}>
        <img src={"assets/images/icons/check_icon.png"} alt={"Check Icon"} />
        <p className={`ml-[24px] text-[20px]`}>
          AI 스피킹 학습 프로그램을 체험하실 수 있습니다.
        </p>
      </div>
      <div className={`flex flex-row items-center justify-center py-1`}>
        <img src={"assets/images/icons/check_icon.png"} alt={"Check Icon"} />
        <p className={`ml-[24px] text-[20px]`}>원하는 교재를 선택해주세요.</p>
      </div>
    </div>
  );
};

export default TryInformation;
