const EvaluationMethod = () => {
  return (
    <div className={`flex flex-row items-center mb-[80px]`}>
      <p
        className={`bg-[#1AB9C5] inline-block text-white text-[20px] p-2 px-5 rounded-md`}
      >
        평가 방식
      </p>
      <p className={`ml-5 text-[18px]`}>
        <span className={`text-[#1AB9C5]`}>발음의 정확성과 유창성</span> 모두
        측정 가능한 AI 기술을 이용하여, 정밀하게 측정하여 자동 평가합니다.
      </p>
    </div>
  );
};

export default EvaluationMethod;
