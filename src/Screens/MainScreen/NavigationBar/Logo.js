import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        src="/assets/images/home_logo.png"
        alt="KidsBrown Logo"
        className={`w-[200px]`}
      />
    </Link>
  );
};

export default Logo;
