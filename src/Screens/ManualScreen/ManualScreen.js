import { Document, Page, pdfjs } from "react-pdf";
import manualPDF from "./manual.pdf";
import { ManualContainer } from "./ManualScreenStyles";
import Popup from "reactjs-popup";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "reactjs-popup/dist/index.css";
import { useRecoilState } from "recoil";
import manualOpenAtom from "../../Stores/Misc/manualOpen";
import { useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ManualScreen = () => {
  const onWheelManualContainer = (event) => {
    const wheelDirection = event.deltaY > 0 ? "down" : "up";
    console.log(wheelDirection);
  };
  const [manualOpen, setManualOpen] = useRecoilState(manualOpenAtom);
  useEffect(() => {
    if (manualOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [manualOpen]);
  return (
    <Popup
      position={"right center"}
      open={manualOpen}
      onClose={() => setManualOpen(false)}
      closeOnDocumentClick={true}
    >
      <ManualContainer onWheel={onWheelManualContainer}>
        <Document file={manualPDF}>
          <Page pageNumber={1} />
        </Document>
      </ManualContainer>
    </Popup>
  );
};

export default ManualScreen;
