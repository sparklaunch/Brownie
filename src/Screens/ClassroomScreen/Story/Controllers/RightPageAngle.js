const RightPageAngle = ({ disabled = false }) => {
  return (
    <div
      className={`w-[47px] h-[47px] bg-[#1AB9C5] rounded-full flex justify-center items-center shadow-md ml-2 ${
        disabled ? `opacity-50` : `opacity-100 cursor-pointer`
      }`}
    >
      <img
        src={"/assets/images/icons/right_angle.svg"}
        alt={"Right Angle Icon"}
      />
    </div>
  );
};

export default RightPageAngle;
