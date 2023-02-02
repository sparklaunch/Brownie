const RecordingInstructions = () => {
  return (
    <div className={`my-3`}>
      <div className={`flex flex-row items-center my-2`}>
        <img src={"assets/images/icons/snowflake.png"} alt={"Snowflake Icon"} />
        <p className={`font-[Jua] text-[20px] ml-[10px]`}>녹음 방법</p>
      </div>
      <ol className={`list-decimal pl-5`}>
        <li className={`text-[18px] my-1`}>
          선정 도서를 선택 후, 본문 전체(시작-끝)를 들으며 따라 읽으면서
          녹음하세요.
        </li>
        <li className={`text-[18px] my-1`}>
          참가자의 음성이 너무 작을 경우 평가가 어려울 수 있습니다.
        </li>
        <li className={`text-[18px] my-1`}>
          선정 도서의 본문 영어 읽기 내용만이 평가에 반영됩니다.
        </li>
        <li className={`text-[18px] my-1`}>
          본문 전체 읽기가 끝나면, <strong>[AI Report]</strong>를 눌러 성적표를
          확인합니다.
        </li>
      </ol>
    </div>
  );
};

export default RecordingInstructions;
