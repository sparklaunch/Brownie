import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const NavigationContentTop = () => {
  return (
    <div className={`flex flex-row justify-between`}>
      <Link to={"/instructions"} className={`mr-[32px]`}>
        사용 설명서
      </Link>
      <Link to={"/administrator"} className={`mr-[32px]`}>
        관리자 사이트
      </Link>
      <Link to={"tel:02-308-4088"} className={`flex flex-row items-center`}>
        <LocalPhoneIcon fontSize={"small"} />
        <p className={`ml-[12px]`}>02-308-4088 (내선 2번)</p>
      </Link>
    </div>
  );
};

export default NavigationContentTop;
