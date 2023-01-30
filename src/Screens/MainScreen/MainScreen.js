import NavigationBar from "./NavigationBar/NavigationBar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Catalog from "./Catalog/Catalog";
import Information from "./Information/Information";

const MainScreen = () => {
  return (
    <div>
      <NavigationBar />
      <Jumbotron />
      <Catalog />
      <Information />
    </div>
  );
};

export default MainScreen;
