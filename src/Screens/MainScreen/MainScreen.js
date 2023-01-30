import NavigationBar from "./NavigationBar/NavigationBar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Catalog from "./Catalog/Catalog";

const MainScreen = () => {
  return (
    <div>
      <NavigationBar />
      <Jumbotron />
      <Catalog />
    </div>
  );
};

export default MainScreen;
