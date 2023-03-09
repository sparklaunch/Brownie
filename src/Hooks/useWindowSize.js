import { useRecoilState } from "recoil";
import windowSizeAtom from "../Stores/Misc/windowSize";
import { useLayoutEffect } from "react";

// 현재 창의 크기를 반환합니다.
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useRecoilState(windowSizeAtom);
  useLayoutEffect(() => {
    const updateWindowSize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateWindowSize); // 창의 크기가 변경되면, 창의 크기를 업데이트합니다.
    updateWindowSize();
    return () => window.removeEventListener("resize", updateWindowSize); // 컴포넌트가 언마운트되면, 이벤트 리스너를 제거합니다.
  }, []);
  return windowSize;
};

export default useWindowSize;
