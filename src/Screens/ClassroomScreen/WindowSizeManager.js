import useWindowSize from "../../Hooks/useWindowSize";
import { useLayoutEffect } from "react";
import textbookSizeAtom from "../../Stores/Misc/textbookSize";
import { useRecoilState } from "recoil";

const WindowSizeManager = () => {
  const [textbookSize, setTextbookSize] = useRecoilState(textbookSizeAtom);
  const windowSize = useWindowSize();
  const [width, height] = windowSize;
  useLayoutEffect(() => {
    if (width < 993) {
      setTextbookSize({
        width: height * 1.5,
        height: height
      });
    } else {
      setTextbookSize({
        width: width * 0.54,
        height: (width * 0.54) / 1.5
      });
    }
  }, [windowSize]);
  return <></>;
};

export default WindowSizeManager;
