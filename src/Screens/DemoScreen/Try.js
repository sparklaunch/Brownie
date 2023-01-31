import TryTitle from "./TryTitle";
import TryContents from "./TryContents";
import TryInformation from "./TryInformation";

const Try = () => {
  return (
    <div className={`flex flex-row justify-center`}>
      <div className={`flex flex-col w-[800px] items-stretch`}>
        <TryTitle />
        <TryContents />
        <TryInformation />
      </div>
    </div>
  );
};

export default Try;
