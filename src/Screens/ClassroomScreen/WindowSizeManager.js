import useWindowSize from "../../Hooks/useWindowSize";
import { useLayoutEffect } from "react";
import textbookSizeAtom from "../../Stores/Misc/textbookSize";
import { useRecoilState } from "recoil";

const WindowSizeManager = () => {
  const [textbookSize, setTextbookSize] = useRecoilState(textbookSizeAtom);
  const windowSize = useWindowSize();
  const [width, height] = windowSize;
  useLayoutEffect(() => {
    if (width > 1300 && height > 900) {
      setTextbookSize({
        width: 1300 * 0.76,
        height: (1300 * 0.76) / 1.5
      });
    } else if (width > 1300 && height <= 900) {
      setTextbookSize({
        width: height,
        height: height / 1.5
      });
    } else if (width <= 1300 && height > 900) {
      setTextbookSize({
        width: width * 0.76,
        height: (width * 0.76) / 1.5
      });
    } else {
      setTextbookSize({
        width: height,
        height: height / 1.5
      });
    }
  }, [windowSize]);
  return <></>;
};

export default WindowSizeManager;
