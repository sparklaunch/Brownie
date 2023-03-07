import NavigationBar from "./NavigationBar/NavigationBar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Catalog from "./Catalog/Catalog";
import Footer from "./Footer/Footer";

const MainScreen = () => {
  return (
    <>
      <NavigationBar />
      <Jumbotron />
      <Catalog />
      <Footer />
    </>
  );
};

export default MainScreen;
