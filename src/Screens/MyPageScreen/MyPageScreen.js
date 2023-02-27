import NavigationBar from "../MainScreen/NavigationBar/NavigationBar";
import MyPageTabs from "./MyPageTabs";
import MyPageContent from "./MyPageContent";

const MyPageScreen = () => {
  return (
    <>
      <NavigationBar />
      <MyPageTabs />
      <MyPageContent />
    </>
  );
};

export default MyPageScreen;
