const RightPageTurner = () => {
  return (
    <div
      className={`absolute z-10 top-[50%] right-[10vw] translate-y-[-50%] cursor-pointer`}
    >
      <img
        src={"/assets/images/icons/right_angle_icon.svg"}
        alt={"Right Angle Icon"}
      />
    </div>
  );
};

export default RightPageTurner;
