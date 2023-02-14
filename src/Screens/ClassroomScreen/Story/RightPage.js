const RightPage = ({ fileName, isEmpty }) => {
  const onClickRightPage = () => {};
  return (
    <div className={`relative z-[1] cursor-pointer`} onClick={onClickRightPage}>
      {isEmpty || <img src={fileName} alt={"Right Page"} loading={"lazy"} />}
      <div
        className={`absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black opacity-50`}
      />
    </div>
  );
};

export default RightPage;
