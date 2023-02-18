const TextbooksSpecimen = () => {
  return (
    <div className={`flex flex-col items-center justify-center`}>
      <img
        src={`/assets/images/textbooks.png`}
        alt={`Textbooks`}
        className={`mb-[36px] w-[400px]`}
      />
      <p className={`text-[#999999] text-[16px] font-bold mb-[12px]`}>
        파닉스 전용 Phonics Fun Readers
      </p>
      <div className={`text-center`}>
        <p className={`text-[#999999] text-[16px]`}>
          파닉스를 학습하고 있는 아이들에게 효과적인 교재입니다.
        </p>
        <p className={`text-[#999999] text-[16px]`}>
          짧고 재미있는 스토리와, 호기심을 자극하는
        </p>
        <p className={`text-[#999999] text-[16px]`}>
          귀여운 캐릭터들이 등장하여 몰입감을 높여줍니다.
        </p>
      </div>
    </div>
  );
};

export default TextbooksSpecimen;
