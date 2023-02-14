const LeftPage = ({ fileName, isEmpty }) => {
  const onClickLeftPage = () => {};
  return (
    <div className={`relative z-[1] cursor-pointer`} onClick={onClickLeftPage}>
      {isEmpty || <img src={fileName} alt={"Left Page"} loading={"lazy"} />}
      <div
        className={`absolute right-0 top-0 h-full w-10 bg-gradient-to-r from-transparent to-black opacity-50`}
      />
    </div>
  );
};

export default LeftPage;
