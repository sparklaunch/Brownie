import isLoggedIn from "../../../../Utilities/isLoggedIn";
import SignInForm from "./SignInForm/SignInForm";
import Welcome from "./Welcome/Welcome";

const JumbotronForm = () => {
  if (isLoggedIn()) {
    return <Welcome />;
  } else {
    return <SignInForm />;
  }
};

export default JumbotronForm;
