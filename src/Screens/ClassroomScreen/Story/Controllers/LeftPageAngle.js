import {
  LeftPageAngleContainer,
  LeftPageAngleImage
} from "./LeftPageAngleStyles";

const LeftPageAngle = ({ disabled = false }) => {
  return (
    <LeftPageAngleContainer disabled={disabled}>
      <LeftPageAngleImage
        src={"/assets/images/icons/left_angle.svg"}
        alt={"Left Angle Icon"}
      />
    </LeftPageAngleContainer>
  );
};

export default LeftPageAngle;
