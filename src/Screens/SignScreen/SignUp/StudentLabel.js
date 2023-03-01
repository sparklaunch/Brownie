import {
  BulletIcon,
  StudentLabelContainer,
  StudentLabelText
} from "./StudentLabelStyles";

const StudentLabel = () => {
  return (
    <StudentLabelContainer>
      <BulletIcon
        src={"assets/images/icons/bullet_icon.svg"}
        alt={"Bullet Icon"}
      />
      <StudentLabelText>학생(자녀) 정보</StudentLabelText>
    </StudentLabelContainer>
  );
};

export default StudentLabel;
