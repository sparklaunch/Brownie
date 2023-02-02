const StatusLabels = () => {
  return (
    <div className={`flex flex-row justify-end`}>
      <div className={`flex flex-row items-center`}>
        <img src={"assets/images/icons/bullet_icon.svg"} alt={"Bullet Icon"} />
        <p className={`text-[16px] ml-2`}>학습 완료</p>
      </div>
      <div className={`flex flex-row items-center ml-6`}>
        <img
          src={"assets/images/icons/pyramid_icon.png"}
          alt={"Pyramid Icon"}
        />
        <p className={`text-[16px] ml-2`}>학습 진행중</p>
      </div>
    </div>
  );
};

export default StatusLabels;
