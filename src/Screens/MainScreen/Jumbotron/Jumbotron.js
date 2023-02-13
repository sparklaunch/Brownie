import JumbotronTitle from "./JumbotronTitle";
import JumbotronForm from "./JumbotronForm";

const Jumbotron = () => {
  return (
    <div
      className={`h-[540px] flex bg-jumbotron flex-row justify-center items-center`}
    >
      <div className={`w-[1200px] flex flex-row justify-between`}>
        <JumbotronTitle />
        <JumbotronForm />
      </div>
    </div>
  );
};

export default Jumbotron;
