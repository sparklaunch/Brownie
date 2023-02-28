import Contact from "./Contact";
import {
  NavigationContentTopContainer,
  NavigationLink
} from "./NavigationContentTopStyles";
import { useNavigate } from "react-router-dom";

const NavigationContentTop = () => {
  const navigate = useNavigate();
  const onClickAdministrator = () => {
    navigate("/administrator");
  };
  return (
    <NavigationContentTopContainer>
      <NavigationLink onClick={onClickAdministrator}>
        관리자 사이트
      </NavigationLink>
      <Contact />
    </NavigationContentTopContainer>
  );
};

export default NavigationContentTop;
