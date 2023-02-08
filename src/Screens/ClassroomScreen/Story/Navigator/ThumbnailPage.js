const ThumbnailPage = ({ isLeftEdge = false, isRightEdge = false }) => {
  const leftEdgeGradient = `bg-gradient-to-r from-transparent to-white`;
  const rightEdgeGradient = `bg-gradient-to-r from-white`;
  return (
    <div
      className={`${isLeftEdge && leftEdgeGradient} ${
        isRightEdge && rightEdgeGradient
      } ${!isLeftEdge && !isRightEdge && `bg-white`}`}
    ></div>
  );
};

export default ThumbnailPage;
