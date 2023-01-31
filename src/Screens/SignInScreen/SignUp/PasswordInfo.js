import InfoIcon from "@mui/icons-material/Info";

const PasswordInfo = () => {
  return (
    <div>
      <div className={`flex flex-row items-center`}>
        <InfoIcon
          sx={{
            fill: "#ACACAC"
          }}
        />
        <p className={`text-[13px] text-[#ACACAC] ml-1`}>
          알파벳, 숫자 조합으로 최소 6자리 이상 입력하세요.
        </p>
      </div>
    </div>
  );
};

export default PasswordInfo;
