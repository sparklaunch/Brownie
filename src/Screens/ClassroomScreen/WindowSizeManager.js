import useWindowSize from "../../Hooks/useWindowSize";
import { useLayoutEffect } from "react";
import textbookSizeAtom from "../../Stores/Misc/textbookSize";
import { useRecoilState } from "recoil";

const WindowSizeManager = () => {
  const [textbookSize, setTextbookSize] = useRecoilState(textbookSizeAtom);
  const windowSize = useWindowSize();
  const [width, height] = windowSize;
  useLayoutEffect(() => {
    setTextbookSize({
      width: width * 0.8,
      height: height * 0.74
    });
  }, [windowSize]);
  return <></>;
};

export default WindowSizeManager;
