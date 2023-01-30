import NavigationBar from "./NavigationBar/NavigationBar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Catalog from "./Catalog/Catalog";
import Information from "./Information/Information";
import Footer from "./Footer/Footer";

const MainScreen = () => {
  return (
    <div>
      <NavigationBar />
      <Jumbotron />
      <Catalog />
      <Information />
      <Footer />
    </div>
  );
};

export default MainScreen;
