import { Document, Page, pdfjs } from "react-pdf";
import manualPDF from "./manual.pdf";
import { ManualContainer } from "./ManualScreenStyles";
import Popup from "reactjs-popup";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "reactjs-popup/dist/index.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ManualScreen = () => {
  return (
    <Popup position={"right center"} closeOnDocumentClick={false} open={true}>
      <ManualContainer>
        <Document file={manualPDF}>
          <Page pageNumber={1} />
        </Document>
      </ManualContainer>
    </Popup>
  );
};

export default ManualScreen;
