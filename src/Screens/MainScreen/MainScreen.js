import NavigationBar from "./NavigationBar/NavigationBar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Catalog from "./Catalog/Catalog";
import Information from "./Information/Information";
import Footer from "./Footer/Footer";

const MainScreen = () => {
  return (
    <>
      <NavigationBar />
      <Jumbotron />
      <Catalog />
      <Information />
      <Footer />
    </>
  );
};

export default MainScreen;
