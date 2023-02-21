import NavigationBar from "../MainScreen/NavigationBar/NavigationBar";
import { AdministratorSignInFormContainer } from "./AdministratorSignInScreenStyles";
import AdministratorSignInForm from "./AdministratorSignInForm";

const AdministratorSignInScreen = () => {
  return (
    <>
      <NavigationBar />
      <AdministratorSignInFormContainer>
        <AdministratorSignInForm />
      </AdministratorSignInFormContainer>
    </>
  );
};

export default AdministratorSignInScreen;
