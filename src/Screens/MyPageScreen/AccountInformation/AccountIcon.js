import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const AccountIcon = () => {
  return (
    <div className={`text-center`}>
      <ManageAccountsIcon
        sx={{
          fontSize: "64px",
          fill: "#515151"
        }}
      />
    </div>
  );
};

export default AccountIcon;
