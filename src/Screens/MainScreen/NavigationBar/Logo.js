import { Link } from "react-router-dom";
import { LogoContainer, LogoImage } from "./LogoStyles";

const Logo = () => {
  return (
    <LogoContainer>
      <Link to={"/"}>
        <LogoImage
          src="/assets/images/logos/home_logo.png"
          alt="KidsBrown Logo"
        />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
