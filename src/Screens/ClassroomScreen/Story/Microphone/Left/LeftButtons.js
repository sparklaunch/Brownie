const LeftButtons = () => {
  return (
    <div className={`flex flex-row`}>
      <img
        src={`/assets/images/retry_button.svg`}
        alt={`Retry Button`}
        className={`mr-3`}
      />
      <img src={`/assets/images/my_voice.svg`} alt={`My Voice Button`} />
    </div>
  );
};

export default LeftButtons;
