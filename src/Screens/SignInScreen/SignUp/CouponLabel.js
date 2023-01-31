import CircleIcon from "@mui/icons-material/Circle";

const CouponLabel = () => {
  return (
    <div className={`flex flex-row items-center mb-1`}>
      <CircleIcon
        sx={{
          width: "10px",
          height: "10px",
          fill: "#1AB9C5"
        }}
      />
      <p className={`ml-3 text-[18px]`}>쿠폰 등록</p>
    </div>
  );
};

export default CouponLabel;
