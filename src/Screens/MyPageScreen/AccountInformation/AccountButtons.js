import { Button } from "@mui/material";

const AccountButtons = () => {
  return (
    <div className={`text-center`}>
      <Button
        variant={"outlined"}
        sx={{
          marginRight: "15px",
          paddingX: "25px",
          color: "#707070",
          borderColor: "#707070",
          backgroundColor: "white"
        }}
      >
        취소
      </Button>
      <Button
        variant={"contained"}
        sx={{
          paddingX: "25px",
          backgroundColor: "#1AB9C5"
        }}
      >
        확인
      </Button>
    </div>
  );
};

export default AccountButtons;
