import LeftPageShadow from "./LeftPageShadow";
import RightPageShadow from "./RightPageShadow";

const PageShadow = ({ pageDirection }) => {
  switch (pageDirection) {
    case "left":
      return <LeftPageShadow />;
    case "right":
      return <RightPageShadow />;
  }
};

export default PageShadow;
