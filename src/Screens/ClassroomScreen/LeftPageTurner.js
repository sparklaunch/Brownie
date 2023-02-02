const LeftPageTurner = () => {
  return (
    <div
      className={`absolute z-10 top-[50%] left-[10vw] translate-y-[-50%] cursor-pointer`}
    >
      <img
        src={"/assets/images/icons/left_angle_icon.svg"}
        alt={"Left Angle Icon"}
      />
    </div>
  );
};

export default LeftPageTurner;
