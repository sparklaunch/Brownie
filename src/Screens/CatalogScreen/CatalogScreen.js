import NavigationBar from "../MainScreen/NavigationBar/NavigationBar";
import TextBookHeader from "./TextBookHeader";
import TextBookLogo from "./TextBookLogo";
import TextBookSubtitle from "./TextBookSubtitle";
import TextBookCatalogImage from "./TextBookCatalogImage";
import TextBookFeatures from "./TextBookFeatures";

const CatalogScreen = () => {
  return (
    <>
      <NavigationBar />
      <TextBookHeader />
      <TextBookLogo />
      <TextBookSubtitle />
      <TextBookCatalogImage />
      <TextBookFeatures />
    </>
  );
};

export default CatalogScreen;
