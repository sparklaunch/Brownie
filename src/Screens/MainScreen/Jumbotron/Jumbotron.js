import JumbotronTitle from "./JumbotronTitle";

const Jumbotron = () => {
  return (
    <div
      className={`h-[540px] bg-[#47C7D2] flex flex-row justify-center items-center`}
    >
      <div className={`w-[1200px] flex flex-row justify-between`}>
        <JumbotronTitle />
      </div>
    </div>
  );
};

export default Jumbotron;
