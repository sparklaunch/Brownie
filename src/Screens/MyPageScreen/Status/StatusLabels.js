import {
  BulletIcon,
  CompletedContainer,
  PyramidIcon,
  StatusLabel,
  StatusLabelsContainer,
  StudyingContainer
} from "./StatusLabelsStyles";

const StatusLabels = () => {
  return (
    <StatusLabelsContainer>
      <CompletedContainer>
        <BulletIcon
          src={"assets/images/icons/bullet_icon.svg"}
          alt={"Bullet Icon"}
        />
        <StatusLabel>학습 완료</StatusLabel>
      </CompletedContainer>
      <StudyingContainer>
        <PyramidIcon
          src={"assets/images/icons/pyramid_icon.svg"}
          alt={"Pyramid Icon"}
        />
        <StatusLabel>학습 진행중</StatusLabel>
      </StudyingContainer>
    </StatusLabelsContainer>
  );
};

export default StatusLabels;
