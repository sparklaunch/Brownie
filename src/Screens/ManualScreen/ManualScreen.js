import { Document, Page, pdfjs } from "react-pdf";
import manualPDF from "./manual.pdf";
import { ManualContainer } from "./ManualScreenStyles";
import Popup from "reactjs-popup";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "reactjs-popup/dist/index.css";
import { useRecoilState } from "recoil";
import manualOpenAtom from "../../Stores/Misc/manualOpen";
import { useEffect, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ManualScreen = () => {
  const [manualPageNumber, setManualPageNumber] = useState(1);
  const onWheelManualContainer = (event) => {
    const wheelDirection = event.deltaY > 0 ? "down" : "up";
    switch (wheelDirection) {
      case "down":
        setManualPageNumber(Math.min(manualPageNumber + 1, 6));
        break;
      case "up":
        setManualPageNumber(Math.max(manualPageNumber - 1, 1));
        break;
    }
  };
  const [manualOpen, setManualOpen] = useRecoilState(manualOpenAtom);
  useEffect(() => {
    if (manualOpen) {
      document.body.style.overflow = "hidden";
    } else {
      setManualPageNumber(1);
      document.body.style.overflow = "unset";
    }
  }, [manualOpen]);
  return (
    <Popup
      position={"center center"}
      open={manualOpen}
      onClose={() => setManualOpen(false)}
      closeOnDocumentClick={true}
    >
      <ManualContainer onWheel={onWheelManualContainer}>
        <Document file={manualPDF}>
          <Page
            pageNumber={manualPageNumber}
            loading={`페이지를 로딩 중입니다...`}
          />
        </Document>
      </ManualContainer>
    </Popup>
  );
};

export default ManualScreen;
