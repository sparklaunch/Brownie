import { useRecoilState } from "recoil";
import modalOpenAtom from "../../../Stores/Misc/modalOpen";
import CatalogModalContent from "./CatalogModalContent";
import { useRef } from "react";

const CatalogModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenAtom);
  const contentRef = useRef(null);
  return (
    <div
      className={`fixed z-[1] top-0 left-0 bottom-0 right-0 backdrop-blur-md bg-white/30`}
      onClick={(event) => {
        if (event.target !== contentRef.current) {
          setModalOpen(false);
        }
      }}
    >
      <div className={`w-full h-full flex justify-center items-center`}>
        <div
          className={`w-[600px] p-3 bg-white rounded-lg shadow-xl border-t-8 border-[#1AB9C5]`}
          ref={contentRef}
        >
          <CatalogModalContent />
        </div>
      </div>
    </div>
  );
};

export default CatalogModal;
