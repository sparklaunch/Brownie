const LeftCompletedMicrophone = () => {
  const onClickRetry = () => {

  }
  const onClickMyVoice = () => {

  }
  return (
    <div
      className={`absolute left-[50%] bottom-[-100px] translate-x-[-50%] flex flex-row`}
    >
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

export default LeftCompletedMicrophone;
