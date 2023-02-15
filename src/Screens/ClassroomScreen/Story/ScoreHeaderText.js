const ScoreHeaderText = ({ score }) => {
  switch (score) {
    case 0:
      return (
        <p className={`text-[24px] font-[Jua] text-[#FF2442] ml-3`}>
          Nice Try!
        </p>
      );
    case 1:
      return (
        <p className={`text-[24px] font-[Jua] text-[#FF8200] ml-3`}>Good!</p>
      );
    case 2:
      return (
        <p className={`text-[24px] font-[Jua] text-[#15B58F] ml-3`}>
          Excellent!
        </p>
      );
  }
  return <div></div>;
};

export default ScoreHeaderText;
