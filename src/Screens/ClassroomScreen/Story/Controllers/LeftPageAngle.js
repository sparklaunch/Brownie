const LeftPageAngle = ({ disabled = false }) => {
  return (
    <div
      className={`w-[47px] h-[47px] bg-[#1AB9C5] rounded-full flex justify-center items-center shadow-md mr-2 ${
        disabled ? `opacity-50` : `opacity-100 cursor-pointer`
      }`}
    >
      <img
        src={"/assets/images/icons/left_angle.svg"}
        alt={"Left Angle Icon"}
      />
    </div>
  );
};

export default LeftPageAngle;
