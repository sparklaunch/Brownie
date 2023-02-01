import { atom } from "recoil";

const selectedCatalogAtom = atom({
  key: "selectedCatalog",
  default: ""
});

export default selectedCatalogAtom;
