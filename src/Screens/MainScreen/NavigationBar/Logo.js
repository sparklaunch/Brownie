import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        src="/assets/images/Logo.png"
        alt="KidsBrown Logo"
        className={`w-[200px] h-[40px]`}
      />
    </Link>
  );
};

export default Logo;
