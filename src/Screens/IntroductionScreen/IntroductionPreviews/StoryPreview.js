const StoryPreview = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <p className={`font-[Jua] text-[32px] mb-[16px]`}>Story 코너</p>
      <p className={`text-[#515151] text-[18px]`}>
        원어민 발음을 듣고 따라해 보세요.
      </p>
      <p className={`text-[#515151] text-[18px] mb-[60px]`}>
        정확히 읽었는지 AI가 바로 알려줘요.
      </p>
      <img
        src={`/assets/images/story_preview.png`}
        alt={`Story Preview`}
        className={`drop-shadow-2xl`}
      />
    </div>
  );
};

export default StoryPreview;
