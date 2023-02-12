const LeftButtons = () => {
  const onClickRetry = () => {
    console.log("Retry");
  };
  const onClickMyVoice = () => {
    const base64Record = localStorage.getItem("record");
    const audio = new Audio(base64Record);
    audio.play();
  };
  return (
    <div className={`absolute bottom-[-100px] left-[12vw]`}>
      <div className={`flex flex-row`}>
        <img
          src={`/assets/images/retry_button.svg`}
          alt={`Retry Button`}
          className={`mr-5 cursor-pointer w-[70px] h-[70px]`}
          onClick={onClickRetry}
        />
        <img
          src={`/assets/images/my_voice_button.svg`}
          alt={`My Voice Button`}
          className={`cursor-pointer w-[70px] h-[70px]`}
          onClick={onClickMyVoice}
        />
      </div>
    </div>
  );
};

export default LeftButtons;
