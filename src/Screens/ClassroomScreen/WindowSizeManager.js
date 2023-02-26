import useWindowSize from "../../Hooks/useWindowSize";
import { useEffect } from "react";

const WindowSizeManager = () => {
  const windowSize = useWindowSize();
  useEffect(() => {
    console.log("WindowSizeManager: ", windowSize);
  }, [windowSize]);
  return <></>;
};

export default WindowSizeManager;
