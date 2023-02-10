const LeftButtons = () => {
  const onClickRetry = () => {
    console.log("Retry");
  };
  const onClickMyVoice = () => {
    console.log("My Voice");
  };
  return (
    <div className={`flex flex-row`}>
      <img
        src={`/assets/images/retry_button.svg`}
        alt={`Retry Button`}
        className={`mr-3 cursor-pointer`}
        onClick={onClickRetry}
      />
      <img
        src={`/assets/images/my_voice.svg`}
        alt={`My Voice Button`}
        className={`cursor-pointer`}
        onClick={onClickMyVoice}
      />
    </div>
  );
};

export default LeftButtons;
