import styled from "styled-components";
import { useRecoilState } from "recoil";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";

const IdleMicrophone = () => {
  const OuterCircle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.2);
    background-color: #1ab9c5;
    animation: fadeOut 1.3s infinite;
    @keyframes fadeOut {
      0% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
      }
    }
  `;
  const InnerCircle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.1);
    background-color: #1ab9c5;
    animation: fadeOut 1.3s infinite;
    @keyframes fadeOut {
      0% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
      }
    }
  `;
  const Wave = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1);
    border: 5px solid #1ab9c5;
    animation: wave 1.3s infinite;
    @keyframes wave {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(1.4);
        opacity: 0;
      }
    }
  `;
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const recordVoice = () => {};
  const onClickMicrophone = () => {
    setWordMicrophoneState("recording");
  };
  return (
    <div
      className={`absolute left-[50%] translate-x-[-50%] bottom-7`}
      onClick={onClickMicrophone}
    >
      <div>
        <OuterCircle />
        <InnerCircle />
        <Wave />
      </div>
      <img
        src={`/assets/images/icons/microphone_idle.svg`}
        alt={"Microphone"}
        className={`relative left-0 w-[70px] h-[70px] cursor-pointer`}
      />
    </div>
  );
};

export default IdleMicrophone;
