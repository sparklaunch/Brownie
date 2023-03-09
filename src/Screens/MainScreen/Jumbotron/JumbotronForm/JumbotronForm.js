import isLoggedIn from "../../../../Utilities/isLoggedIn";
import SignInForm from "./SignInForm/SignInForm";
import Welcome from "./Welcome/Welcome";

const JumbotronForm = () => {
  if (isLoggedIn()) {
    // 로그인 여부를 확인합니다.
    return <Welcome />;
  } else {
    // 로그인하지 않았다면 로그인 폼을 렌더링합니다.
    return <SignInForm />;
  }
};

export default JumbotronForm;
