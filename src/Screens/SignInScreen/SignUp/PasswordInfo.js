const PasswordInfo = () => {
  return (
    <div className={`mb-3`}>
      <div className={`flex flex-row items-center`}>
        <img src={"assets/images/icons/info_icon.png"} alt={"Info Icon"} />
        <p className={`text-[13px] text-[#ACACAC] ml-2`}>
          알파벳, 숫자 조합으로 최소 6자리 이상 입력하세요.
        </p>
      </div>
    </div>
  );
};

export default PasswordInfo;
