import { atom } from "recoil";

const selectedCatalogAtom = atom({
  key: "selectedCatalog",
  default: {
    label: "",
    title: ""
  }
});

export default selectedCatalogAtom;
