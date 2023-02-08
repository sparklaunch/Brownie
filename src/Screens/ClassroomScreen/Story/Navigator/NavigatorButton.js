const NavigatorButton = () => {
  const onClickNavigatorButton = () => {};
  return (
    <div
      className={`flex flex-row items-center bg-[#1AB9C5] px-10 py-2 rounded-b-lg shadow-lg cursor-pointer`}
      onClick={onClickNavigatorButton}
    >
      <p className={`text-white text-[18px] mr-3`}>Pages</p>
      <img
        src={"/assets/images/icons/caret_down.svg"}
        alt={"Caret Down Icon"}
      />
    </div>
  );
};

export default NavigatorButton;
