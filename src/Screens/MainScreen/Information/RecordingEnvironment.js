const RecordingEnvironment = () => {
  return (
    <div className={`my-3 mb-[40px]`}>
      <div className={`flex flex-row items-center my-2`}>
        <img src={"assets/images/icons/snowflake.png"} alt={"Snowflake Icon"} />
        <p className={`font-[Jua] text-[20px] ml-[10px]`}>녹음 환경</p>
      </div>
      <ol className={`list-decimal pl-5`}>
        <li className={`text-[18px] my-1`}>
          정확한 심사를 위해, 조용한 공간에서 녹음하고, 녹음 중 타인의 목소리가
          섞이지 않도록 주의해주세요.
        </li>
        <li className={`text-[18px] my-1 text-[#EC1C47]`}>
          정확한 테스트를 위해, 마이크를 이용해주세요.
        </li>
      </ol>
    </div>
  );
};

export default RecordingEnvironment;
