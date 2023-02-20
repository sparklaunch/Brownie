import NavigationBar from "./NavigationBar/NavigationBar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Catalog from "./Catalog/Catalog";
import Information from "./Information/Information";
import Footer from "./Footer/Footer";
import { useRecoilState } from "recoil";
import modalOpenAtom from "../../Stores/Misc/modalOpen";
import CatalogModal from "./Catalog/CatalogModal/CatalogModal";

const MainScreen = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenAtom);
  return (
    <>
      <NavigationBar />
      <Jumbotron />
      <Catalog />
      <Information />
      <Footer />
      {modalOpen && <CatalogModal />}
    </>
  );
};

export default MainScreen;
