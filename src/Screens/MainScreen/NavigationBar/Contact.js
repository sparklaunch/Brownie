import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Contact = () => {
  return (
    <div>
      <a href={`tel:02-308-4088`} className={`flex flex-row items-center`}>
        <LocalPhoneIcon fontSize={"small"} />
        <p className={`ml-[12px]`}>02-308-4088 (내선 2번)</p>
      </a>
    </div>
  );
};

export default Contact;
