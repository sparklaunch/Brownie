import InfoIcon from "@mui/icons-material/Info";

const CouponCautionTitle = () => {
  return (
    <div className={`flex flex-row items-center justify-center mb-4`}>
      <InfoIcon
        sx={{
          fill: "#1AB9C5"
        }}
      />
      <p className={`font-[Jua] text-[#1AB9C5] text-[22px] ml-2`}>
        꼭 확인해주세요!
      </p>
    </div>
  );
};

export default CouponCautionTitle;
