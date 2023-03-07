import { pdfjs } from "react-pdf";
import {
  LeftPager,
  ManualPageImage,
  ManualScreenContainer,
  RightPager
} from "./ManualScreenStyles";
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
  // const onWheelManualContainer = (event) => {
  //   const wheelDirection = event.deltaY > 0 ? "down" : "up";
  //   switch (wheelDirection) {
  //     case "down":
  //       setManualPageNumber(Math.min(manualPageNumber + 1, 6));
  //       break;
  //     case "up":
  //       setManualPageNumber(Math.max(manualPageNumber - 1, 1));
  //       break;
  //   }
  // };
  const [manualOpen, setManualOpen] = useRecoilState(manualOpenAtom);
  const onClickLeftPager = () => {
    setManualPageNumber(Math.max(1, manualPageNumber - 1));
  };
  const onClickRightPager = () => {
    setManualPageNumber(Math.min(6, manualPageNumber + 1));
  };
  useEffect(() => {
    if (manualOpen) {
      document.body.style.overflow = "hidden";
    } else {
      setManualPageNumber(1);
      document.body.style.overflow = "unset";
    }
  }, [manualOpen]);
  return (
    <ManualScreenContainer>
      <Popup
        position={"center center"}
        open={manualOpen}
        onClose={() => setManualOpen(false)}
        closeOnDocumentClick={true}
        contentStyle={{
          padding: 0,
          width: "80%"
        }}
      >
        <LeftPager
          src={`/assets/images/icons/left_angle.svg`}
          alt={`Left Angle Icon`}
          hidden={manualPageNumber === 1}
          onClick={onClickLeftPager}
        />
        <ManualPageImage
          src={`/assets/images/manual/${manualPageNumber}.png`}
          alt={`Manual Page`}
        />
        <RightPager
          src={`/assets/images/icons/right_angle.svg`}
          alt={`Right Angle Icon`}
          hidden={manualPageNumber === 6}
          onClick={onClickRightPager}
        />
      </Popup>
    </ManualScreenContainer>
  );
};

export default ManualScreen;
