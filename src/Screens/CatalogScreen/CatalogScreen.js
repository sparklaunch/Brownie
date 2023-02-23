import NavigationBar from "../MainScreen/NavigationBar/NavigationBar";
import TextBookHeader from "./TextBookHeader";
import TextBookLogo from "./TextBookLogo";
import TextBookSubtitle from "./TextBookSubtitle";
import TextBookCatalogImage from "./TextBookCatalogImage";

const CatalogScreen = () => {
  return (
    <>
      <NavigationBar />
      <TextBookHeader />
      <TextBookLogo />
      <TextBookSubtitle />
      <TextBookCatalogImage />
    </>
  );
};

export default CatalogScreen;
