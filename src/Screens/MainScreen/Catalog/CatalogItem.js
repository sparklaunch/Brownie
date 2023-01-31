import CatalogLabel from "./CatalogLabel";
import CatalogTitle from "./CatalogTitle";
import { useRecoilState } from "recoil";
import modalOpenAtom from "../../../Stores/Misc/modalOpen";
import { Box, Modal } from "@mui/material";
import CatalogModal from "./CatalogModal";

const CatalogItem = ({ coverImage, data }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenAtom);
  const onClickCatalogItem = () => {
    setModalOpen(true);
  };
  return (
    <div className={`relative drop-shadow-lg`}>
      <img
        loading={"lazy"}
        src={`/assets/images/covers/${coverImage}`}
        alt={`${coverImage}`}
        className={`h-[288px] w-full object-cover cursor-pointer rounded-lg hover:opacity-60 transition duration-200 ease-in-out`}
        onClick={onClickCatalogItem}
      />
      <CatalogLabel label={coverImage.split(".avif")[0]} />
      <CatalogTitle data={data} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box>
          <CatalogModal />
        </Box>
      </Modal>
    </div>
  );
};

export default CatalogItem;
