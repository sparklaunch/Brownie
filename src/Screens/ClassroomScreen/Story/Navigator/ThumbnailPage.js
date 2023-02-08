import { useParams } from "react-router-dom";
import PageShadow from "./PageShadow";
import EmptyThumbnail from "./EmptyThumbnail";

const ThumbnailPage = ({
  page,
  pageDirection,
  isLeftEdge = false,
  isRightEdge = false
}) => {
  const { level } = useParams();
  const leftEdgeGradient = `bg-gradient-to-r from-[#0C4A4E]`;
  const rightEdgeGradient = `bg-gradient-to-r from-transparent to-[#0C4A4E]`;
  if (page <= 0 || page > 10) {
    return <EmptyThumbnail />;
  }
  return (
    <div className={`relative`}>
      <img
        src={`/assets/images/pages/${level}-${page}.jpg`}
        alt={`Page ${page}`}
        loading={"lazy"}
        className={`w-full h-full object-cover`}
      />
      <div
        className={`absolute top-0 left-0 bottom-0 right-0 ${
          isLeftEdge && leftEdgeGradient
        } ${isRightEdge && rightEdgeGradient}`}
      />
      <PageShadow pageDirection={pageDirection} />
    </div>
  );
};

export default ThumbnailPage;
