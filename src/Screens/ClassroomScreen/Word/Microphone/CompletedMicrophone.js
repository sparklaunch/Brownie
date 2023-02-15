const CompletedMicrophone = () => {
  const onClickRetry = () => {};
  const onClickMyVoice = () => {
    const myVoice = localStorage.getItem("record");
    const audio = new Audio(myVoice);
    audio.play();
  };
  return (
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
  );
};

export default CompletedMicrophone;
