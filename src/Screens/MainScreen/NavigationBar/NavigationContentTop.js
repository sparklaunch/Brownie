import { Link } from "react-router-dom";
import Contact from "./Contact";

const NavigationContentTop = () => {
  return (
    <div className={`flex flex-row items-center justify-end mb-[24px]`}>
      <Link to={"/administrator"} className={`mr-[32px]`}>
        관리자 사이트
      </Link>
      <Contact />
    </div>
  );
};

export default NavigationContentTop;
