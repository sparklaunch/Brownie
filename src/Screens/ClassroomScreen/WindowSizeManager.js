import useWindowSize from "../../Hooks/useWindowSize";
import { useLayoutEffect } from "react";
import textbookSizeAtom from "../../Stores/Misc/textbookSize";
import { useSetRecoilState } from "recoil";

const WindowSizeManager = () => {
  const setTextbookSize = useSetRecoilState(textbookSizeAtom);
  const windowSize = useWindowSize();
  const [width, height] = windowSize;
  useLayoutEffect(() => {
    if (width < 993) {
      // 모바일
      setTextbookSize({
        width: height * 1.5,
        height: height
      });
    } else if (width >= 993 && height <= 479) {
      // 태블릿
      setTextbookSize({
        width: height * 1.5,
        height: height
      });
    } else {
      // 데스크탑
      setTextbookSize({
        width: width * 0.54,
        height: (width * 0.54) / 1.5
      });
    }
  }, [windowSize, height, width]); // 윈도우 사이즈가 바뀔 때마다 실행합니다.
  return <></>;
};

export default WindowSizeManager;
