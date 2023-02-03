const RightPage = ({ fileName }) => {
  return (
    <div className={`relative`}>
      <img src={fileName} alt={"Right Page"} />
      <div
        className={`absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black opacity-50`}
      />
    </div>
  );
};

export default RightPage;
