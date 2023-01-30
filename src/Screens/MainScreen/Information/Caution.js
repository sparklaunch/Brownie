import RecordingEnvironment from "./RecordingEnvironment";
import RecordingInstructions from "./RecordingInstructions";

const Caution = () => {
  return (
    <div>
      <p
        className={`bg-[#1AB9C5] inline-block text-white text-[20px] p-2 px-5 rounded-md`}
      >
        주의 사항
      </p>
      <RecordingEnvironment />
      <RecordingInstructions />
    </div>
  );
};

export default Caution;
