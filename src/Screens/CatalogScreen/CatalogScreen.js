import NavigationBar from "../MainScreen/NavigationBar/NavigationBar";
import TextBookHeader from "./TextBookHeader";
import TextBookLogo from "./TextBookLogo";
import TextBookSubtitle from "./TextBookSubtitle";
import TextBookCatalogImage from "./TextBookCatalogImage";
import TextBookFeatures from "./TextBookFeatures";
import TextBookComponents from "./TextBookComponents";
import { TextBookComponentsAndDownloads } from "./CatalogScreenStyles";
import TextBookDownloads from "./TextBookDownloads";

const CatalogScreen = () => {
  return (
    <>
      <NavigationBar />
      <TextBookHeader />
      <TextBookLogo />
      <TextBookSubtitle />
      <TextBookCatalogImage />
      <TextBookFeatures />
      <TextBookComponentsAndDownloads>
        <TextBookComponents />
        <TextBookDownloads />
      </TextBookComponentsAndDownloads>
    </>
  );
};

export default CatalogScreen;
