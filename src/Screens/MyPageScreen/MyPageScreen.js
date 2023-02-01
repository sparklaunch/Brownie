import NavigationBar from "../MainScreen/NavigationBar/NavigationBar";
import MyPageTabs from "./MyPageTabs";
import MyPageContent from "./MyPageContent";

const MyPageScreen = () => {
  return (
    <div>
      <NavigationBar />
      <MyPageTabs />
      <MyPageContent />
    </div>
  );
};

export default MyPageScreen;
