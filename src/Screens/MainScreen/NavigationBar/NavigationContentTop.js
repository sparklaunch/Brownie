import { Link } from "react-router-dom";

const NavigationContentTop = () => {
  return (
    <div className={`justify-between`}>
      <Link to={"/instructions"} className={`mr-[32px]`}>
        사용 설명서
      </Link>
      <Link to={"/administrator"}>관리자 사이트</Link>
    </div>
  );
};

export default NavigationContentTop;
