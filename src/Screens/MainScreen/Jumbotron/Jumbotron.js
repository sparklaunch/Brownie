import JumbotronTitle from "./JumbotronTitle";
import JumbotronForm from "./JumbotronForm";

const Jumbotron = () => {
  return (
    <div
      className={`h-[540px] bg-[#47C7D2] flex flex-row justify-center items-center`}
    >
      <div className={`w-[1200px] flex flex-row justify-between`}>
        <JumbotronTitle />
        <JumbotronForm />
      </div>
    </div>
  );
};

export default Jumbotron;
