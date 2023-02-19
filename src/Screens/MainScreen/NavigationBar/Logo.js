import { Link } from "react-router-dom";
import { LogoContainer } from "./LogoStyles";

const Logo = () => {
  return (
    <LogoContainer>
      <Link to={"/"}>
        <img src="/assets/images/logos/home_logo.png" alt="KidsBrown Logo" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
