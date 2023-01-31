import NavigationBar from "./NavigationBar/NavigationBar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Catalog from "./Catalog/Catalog";
import Information from "./Information/Information";
import Footer from "./Footer/Footer";
import { useRecoilState } from "recoil";
import modalOpenAtom from "../../Stores/Misc/modalOpen";
import CatalogModal from "./Catalog/CatalogModal";

const MainScreen = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenAtom);
  return (
    <div>
      <NavigationBar />
      <Jumbotron />
      <Catalog />
      <Information />
      <Footer />
      {modalOpen && <CatalogModal />}
    </div>
  );
};

export default MainScreen;
