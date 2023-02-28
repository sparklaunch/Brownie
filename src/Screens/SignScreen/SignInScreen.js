import { Box, Tab, Tabs } from "@mui/material";
import { useRecoilState } from "recoil";
import tabValueAtom from "../../Stores/Auth/tabValue";
import SignInForm from "./SignIn/SignInForm";
import SignUpForm from "./SignUp/SignUpForm";
import Terms from "./Terms";
import NavigationBar from "../MainScreen/NavigationBar/NavigationBar";
import Footer from "../MainScreen/Footer/Footer";

const SignInScreen = () => {
  const [tabValue, setTabValue] = useRecoilState(tabValueAtom);
  const onTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <>
      <NavigationBar />
      <div className={`flex flex-col justify-center h-[100vh]`}>
        <div className={`flex flex-col items-center overflow-clip`}>
          <div
            className={`w-[500px] border-2 border-[#DFDFDF] rounded-lg shadow-lg`}
          >
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={tabValue} onChange={onTabChange}>
                  <Tab label="로그인" className={`w-[50%]`} />
                  <Tab label="회원가입" className={`w-[50%]`} />
                </Tabs>
              </Box>
              {tabValue === 0 ? <SignInForm /> : <SignUpForm />}
            </Box>
          </div>
          <Terms />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignInScreen;
