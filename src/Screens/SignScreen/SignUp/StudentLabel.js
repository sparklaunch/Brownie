const StudentLabel = () => {
  return (
    <div className={`flex flex-row items-center mb-1`}>
      <img
        src={"assets/images/icons/bullet_icon.svg"}
        alt={"Bullet Icon"}
        className={`w-[8px] h-[8px]`}
      />
      <p className={`ml-3 text-[18px]`}>학생(자녀) 정보</p>
    </div>
  );
};

export default StudentLabel;
