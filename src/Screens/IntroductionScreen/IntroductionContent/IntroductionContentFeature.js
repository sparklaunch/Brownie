const IntroductionContentFeature = ({ icon, text }) => {
  return (
    <div className={`flex flex-row items-center m-[10px]`}>
      <img
        src={`/assets/images/${icon}.svg`}
        alt={`${icon} Icon`}
        className={`mr-[16px]`}
      />
      <p className={`text-[24px]`}>{text}</p>
    </div>
  );
};

export default IntroductionContentFeature;
