import uuid from "react-uuid";
import { useRecoilValue, useSetRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import useData from "../../../../Hooks/useData";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import resultsScreenShownAtom from "../../../../Stores/Classroom/Story/resultsScreenShown";
import audioDurationAtom from "../../../../Stores/Classroom/audioDuration";
import { useParams } from "react-router-dom";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import highlightVisibleAtom from "../../../../Stores/Classroom/Story/highlightVisible";
import Constants from "../../../../Utilities/Constants";
import Swal from "sweetalert2";
import {
  CentralIdleMicrophoneContainer,
  CentralIdleMicrophoneImage,
  InnerCircle,
  OuterCircle,
  Wave
} from "./CentralIdleMicrophoneStyles";
import { Howler } from "howler";
import mediaRecorderAtom from "../../../../Stores/Misc/mediaRecorder";
import currentActivePageAtom from "../../../../Stores/Classroom/Story/currentActivePage";
import playMicrophoneOnAudio from "../../../../Utilities/playMicrophoneOnAudio";
import { elaAxios } from "../../../../Utilities/AxiosInstances";

const CentralIdleMicrophone = () => {
  const { level } = useParams();
  const audioDuration = useRecoilValue(audioDurationAtom);
  const setResultsScreenShown = useSetRecoilState(resultsScreenShownAtom);
  const setScores = useSetRecoilState(scoresAtom);
  const setTotalScore = useSetRecoilState(totalScoreAtom);
  const currentPage = useRecoilValue(currentPageAtom);
  const sentences = useData("sentences");
  const setCentralMicrophoneState = useSetRecoilState(
    centralMicrophoneStateAtom
  );
  const setHighlightVisible = useSetRecoilState(highlightVisibleAtom);
  const mediaRecorder = useRecoilValue(mediaRecorderAtom);
  const currentActivePage = useRecoilValue(currentActivePageAtom);
  const recordVoice = async () => {
    try {
      Howler.unload(); // Howler의 모든 사운드를 unload합니다.
      await playMicrophoneOnAudio(); // 마이크를 켜는 사운드를 재생합니다.
      mediaRecorder.start();
      setCentralMicrophoneState("invisible");
      mediaRecorder.ondataavailable = async (event) => {
        // 녹음 음원 데이터가 사용 가능하다면,
        const blob = new Blob([event.data], { type: "audio/wav" }); // 녹음 음원 데이터를 blob으로 변환합니다.
        const reader = new FileReader(); // blob을 base64로 변환하기 위해 FileReader를 생성합니다.
        reader.readAsDataURL(blob); // blob을 base64로 변환합니다.
        reader.onloadend = () => {
          // base64로 변환이 완료되면,
          const base64Record = reader.result; // base64로 변환된 녹음 음원 데이터를 저장합니다.
          switch (currentActivePage) {
            case "left":
              localStorage.setItem("left_record", base64Record);
              break;
            case "right":
              localStorage.setItem("right_record", base64Record);
              break;
          }
        };
        const formData = new FormData(); // 녹음 음원 데이터를 서버로 전송하기 위해 FormData를 생성합니다.
        switch (currentActivePage) {
          case "left":
            formData.append("text", sentences[currentPage - 1]);
            break;
          case "right":
            formData.append("text", sentences[currentPage]);
            break;
        }
        formData.append("student_audio", event.data); // 녹음 음원 데이터를 formData에 추가합니다.
        const response = await elaAxios.post("/pron_v2/", formData); // 녹음 음원 데이터를 서버로 전송합니다.
        setHighlightVisible(false);
        const stringResponse = JSON.stringify(response, null, 2);
        console.log(stringResponse);
        const totalScore = response.data.total_score; // 서버로부터 받은 응답에서 총 점수를 추출합니다.
        setTotalScore({
          score: totalScore,
          id: uuid()
        });
        switch (currentActivePage) {
          case "left":
            setScores((previous) => {
              return {
                ...previous,
                [`${level}-${currentPage}`]: totalScore
              }; // 총 점수를 scores에 저장합니다.
            });
            break;
          case "right":
            setScores((previous) => {
              return {
                ...previous,
                [`${level}-${currentPage + 1}`]: totalScore
              };
            }); // 총 점수를 scores에 저장합니다.
            break;
        }
        if (currentActivePage === "right") {
          setCentralMicrophoneState("completed");
        }
        setResultsScreenShown(true);
      };
      setTimeout(() => {
        // audioDuration 이후에 녹음을 중지합니다.
        mediaRecorder.stop();
        setCentralMicrophoneState("loading");
      }, audioDuration);
    } catch (error) {
      switch (error.message) {
        case "Requested device not found": // 마이크를 찾을 수 없을 때,
          await Swal.fire(Constants.MICROPHONE_NOT_FOUND);
          break;
        case "Permission denied": // 마이크 사용 권한이 없을 때,
          await Swal.fire(Constants.MICROPHONE_PERMISSION_DENIED);
          break;
        default: // 그 외의 오류가 발생했을 때,
          await Swal.fire(Constants.MICROPHONE_EXCEPTION);
          break;
      }
    }
  };
  const onClickMicrophone = async () => {
    await recordVoice();
  };
  return (
    <CentralIdleMicrophoneContainer onClick={onClickMicrophone}>
      <>
        <OuterCircle />
        <InnerCircle />
        <Wave />
      </>
      <CentralIdleMicrophoneImage
        src={`/assets/images/icons/microphone_idle.svg`}
        alt={"Microphone"}
      />
    </CentralIdleMicrophoneContainer>
  );
};

export default CentralIdleMicrophone;
