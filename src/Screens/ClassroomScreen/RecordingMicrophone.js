import audioDurationAtom from "../../Stores/Classroom/audioDuration";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const RecordingMicrophone = () => {
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const Container = styled.div`
    position: absolute;
    bottom: -10px;
    left: -10px;
    width: 90px;
    height: 90px;
  `;
  const LeftHold = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    clip: rect(0px, 90px, 90px, 45px);
    border-radius: 100%;
  `;
  const RightHold = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    clip: rect(0px, 90px, 90px, 45px);
    border-radius: 100%;
    z-index: 1;
    transform: rotate(180deg);
  `;
  const LeftFill = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    clip: rect(0px, 45px, 90px, 0px);
    z-index: 1;
    animation: left ${audioDuration / 2 / 1000}s linear both;
    background-color: #1ab9c5;
    @keyframes left {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(180deg);
      }
    }
  `;
  const RightFill = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    clip: rect(0px, 45px, 90px, 0px);
    z-index: 3;
    animation: right ${audioDuration / 2 / 1000}s linear both;
    animation-delay: ${audioDuration / 2 / 1000}s;
    background-color: #1ab9c5;
    @keyframes right {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(180deg);
      }
    }
  `;
  return (
    <div className={`relative`}>
      <Container>
        <LeftHold>
          <LeftFill />
        </LeftHold>
        <RightHold>
          <RightFill />
        </RightHold>
      </Container>
      <img
        src={`/assets/images/icons/microphone_recording.svg`}
        alt={"Microphone"}
        className={`relative left-0 w-[70px] h-[70px] z-[1]`}
      />
    </div>
  );
};

export default RecordingMicrophone;
