import { useRecoilState } from "recoil";
import windowSizeAtom from "../Stores/Misc/windowSize";
import { useLayoutEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useRecoilState(windowSizeAtom);
  useLayoutEffect(() => {
    const updateWindowSize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateWindowSize);
    updateWindowSize();
    console.log("useWindowSize: ", windowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);
  return windowSize;
};

export default useWindowSize;
