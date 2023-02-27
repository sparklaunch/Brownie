import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className={`text-[14px] mt-3`}>
      <Link className={`pr-3 border-r-2 border-[#DFDFDF]`} to={"/privacy"}>
        개인정보취급방침
      </Link>
      <Link className={`pl-3`} to={"/terms"}>
        이용약관
      </Link>
    </div>
  );
};

export default Terms;
