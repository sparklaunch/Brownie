import TryTitle from "./TryTitle";
import TryContents from "./TryContents";

const Try = () => {
  return (
    <div className={`flex flex-row justify-center`}>
      <div className={`flex flex-col w-[600px] items-stretch`}>
        <TryTitle />
        <TryContents />
      </div>
    </div>
  );
};

export default Try;
