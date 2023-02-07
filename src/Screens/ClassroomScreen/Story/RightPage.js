const RightPage = ({ fileName, isEmpty }) => {
  return (
    <div className={`relative`}>
      {isEmpty || <img src={fileName} alt={"Right Page"} loading={"lazy"} />}
      <div
        className={`absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black opacity-50`}
      />
    </div>
  );
};

export default RightPage;
