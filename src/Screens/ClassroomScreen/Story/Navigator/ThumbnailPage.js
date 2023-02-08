import { useParams } from "react-router-dom";

const ThumbnailPage = ({ page, isLeftEdge = false, isRightEdge = false }) => {
  const { level } = useParams();
  const leftEdgeGradient = `bg-gradient-to-r from-[#0C4A4E]`;
  const rightEdgeGradient = `bg-gradient-to-r from-transparent to-[#0C4A4E]`;
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
    </div>
  );
};

export default ThumbnailPage;
