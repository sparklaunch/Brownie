import axios from "axios";
import uuid from "react-uuid";
import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import useData from "../../../../Hooks/useData";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import resultsScreenShownAtom from "../../../../Stores/Classroom/Story/resultsScreenShown";
import audioDurationAtom from "../../../../Stores/Classroom/audioDuration";
import { useParams } from "react-router-dom";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import highlightedPageAtom from "../../../../Stores/Classroom/Story/highlightedPage";
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
import { Howl, Howler } from "howler";
import mediaRecorderAtom from "../../../../Stores/Misc/mediaRecorder";

const CentralIdleMicrophone = () => {
  const { level } = useParams();
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [scores, setScores] = useRecoilState(scoresAtom);
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const sentences = useData("sentences");
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [highlightVisible, setHighlightVisible] =
    useRecoilState(highlightVisibleAtom);
  const [highlightedPage, setHighlightedPage] =
    useRecoilState(highlightedPageAtom);
  const [mediaRecorder, setMediaRecorder] = useRecoilState(mediaRecorderAtom);
  const recordVoice = async () => {
    try {
      Howler.unload();
      const audio = new Howl({
        src: ["/assets/audio/microphone_on.wav"]
      });
      audio.play();
      mediaRecorder.start();
      setCentralMicrophoneState("invisible");
      mediaRecorder.ondataavailable = (event) => {
        const blob = new Blob([event.data], { type: "audio/wav" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64Record = reader.result;
          if (highlightedPage !== currentPage) {
            localStorage.setItem("right_record", base64Record);
          } else {
            localStorage.setItem("left_record", base64Record);
          }
        };
        const formData = new FormData();
        if (highlightedPage !== currentPage) {
          formData.append("text", sentences[currentPage]);
        } else {
          formData.append("text", sentences[currentPage - 1]);
        }
        formData.append("student_audio", event.data);
        axios
          .post(`${Constants.ELA_API_ENDPOINT}/pron_v2/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Headers": "*",
              "X-API-KEY": Constants.API_KEY
            }
          })
          .then((response) => {
            setHighlightVisible(false);
            const stringResponse = JSON.stringify(response, null, 2);
            console.log(stringResponse);
            const totalScore = response.data.total_score;
            setTotalScore({
              score: totalScore,
              id: uuid()
            });
            if (highlightedPage !== currentPage) {
              setScores((previous) => {
                return {
                  ...previous,
                  [`${level}-${currentPage + 1}`]: totalScore
                };
              });
            } else {
              setScores((previous) => {
                return {
                  ...previous,
                  [`${level}-${currentPage}`]: totalScore
                };
              });
            }
            if (highlightedPage !== currentPage) {
              setCentralMicrophoneState("completed");
            }
            setResultsScreenShown(true);
          })
          .catch((error) => {
            const stringError = JSON.stringify(error, null, 2);
            console.log(stringError);
          });
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
  const onClickMicrophone = () => {
    recordVoice();
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
