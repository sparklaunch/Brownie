import {
  RightPageAngleContainer,
  RightPageAngleImage
} from "./RightPageAngleStyles";

const RightPageAngle = ({ disabled = false }) => {
  return (
    <RightPageAngleContainer disabled={disabled}>
      <RightPageAngleImage
        src={"/assets/images/icons/right_angle.svg"}
        alt={"Right Angle Icon"}
      />
    </RightPageAngleContainer>
  );
};

export default RightPageAngle;
