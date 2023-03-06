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
      Howler.unload();
      await playMicrophoneOnAudio();
      mediaRecorder.start();
      setCentralMicrophoneState("invisible");
      mediaRecorder.ondataavailable = async (event) => {
        const blob = new Blob([event.data], { type: "audio/wav" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64Record = reader.result;
          switch (currentActivePage) {
            case "left":
              localStorage.setItem("left_record", base64Record);
              break;
            case "right":
              localStorage.setItem("right_record", base64Record);
              break;
          }
        };
        const formData = new FormData();
        switch (currentActivePage) {
          case "left":
            formData.append("text", sentences[currentPage - 1]);
            break;
          case "right":
            formData.append("text", sentences[currentPage]);
            break;
        }
        formData.append("student_audio", event.data);
        const response = await elaAxios.post("/pron_v2/", formData);
        setHighlightVisible(false);
        const stringResponse = JSON.stringify(response, null, 2);
        console.log(stringResponse);
        const totalScore = response.data.total_score;
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
              };
            });
            break;
          case "right":
            setScores((previous) => {
              return {
                ...previous,
                [`${level}-${currentPage + 1}`]: totalScore
              };
            });
            break;
        }
        if (currentActivePage === "right") {
          setCentralMicrophoneState("completed");
        }
        setResultsScreenShown(true);
      };
      setTimeout(() => {
        mediaRecorder.stop();
        setCentralMicrophoneState("loading");
      }, audioDuration);
    } catch (error) {
      switch (error.message) {
        case "Requested device not found":
          await Swal.fire(Constants.MICROPHONE_NOT_FOUND);
          break;
        case "Permission denied":
          await Swal.fire(Constants.MICROPHONE_PERMISSION_DENIED);
          break;
        default:
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
