const WordPreview = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <p className={`font-[Jua] text-[32px] mb-[16px]`}>Word 코너</p>
      <p className={`text-[#515151] text-[18px]`}>발음을 듣고 따라 말하며</p>
      <p className={`text-[#515151] text-[18px] mb-[60px]`}>단어를 익혀요.</p>
      <img src={`/assets/images/word_preview.png`} alt={`Word Preview`} />
    </div>
  );
};

export default WordPreview;
