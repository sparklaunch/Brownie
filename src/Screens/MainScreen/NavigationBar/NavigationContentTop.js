import { Link } from "react-router-dom";
import Contact from "./Contact";

const NavigationContentTop = () => {
  return (
    <div className={`flex flex-row justify-between`}>
      <Link to={"/instructions"} className={`mr-[32px]`}>
        사용 설명서
      </Link>
      <Link to={"/administrator"} className={`mr-[32px]`}>
        관리자 사이트
      </Link>
      <Contact />
    </div>
  );
};

export default NavigationContentTop;
