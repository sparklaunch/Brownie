const LeftPage = ({ fileName }) => {
  return (
    <div className={`relative`}>
      <img src={fileName} alt={"Left Page"} loading={"lazy"} />
      <div
        className={`absolute right-0 top-0 h-full w-10 bg-gradient-to-r from-transparent to-black opacity-50`}
      />
    </div>
  );
};

export default LeftPage;
