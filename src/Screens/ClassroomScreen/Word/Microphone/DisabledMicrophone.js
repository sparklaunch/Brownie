const DisabledMicrophone = () => {
  return (
    <div className={`absolute left-[50%] translate-x-[-50%] bottom-7`}>
      <img
        src={`/assets/images/icons/microphone_disabled.svg`}
        alt={"Disabled microphone"}
        className={`relative left-0 w-[70px] h-[70px]`}
      />
    </div>
  );
};

export default DisabledMicrophone;
