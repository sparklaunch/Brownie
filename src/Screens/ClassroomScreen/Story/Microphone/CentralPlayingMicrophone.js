import { Howler } from "howler";
import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import {
  CentralPlayingMicrophoneContainer,
  CentralPlayingMicrophoneImage,
  InnerCircle,
  OuterCircle,
  Wave
} from "./CentralPlayingMicrophoneStyles";
import axios from "axios";
import Constants from "../../../../Utilities/Constants";
import uuid from "react-uuid";
import Swal from "sweetalert2";
import highlightedPageAtom from "../../../../Stores/Classroom/Story/highlightedPage";
import { useParams } from "react-router-dom";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import highlightVisibleAtom from "../../../../Stores/Classroom/Story/highlightVisible";
import useData from "../../../../Hooks/useData";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import resultsScreenShownAtom from "../../../../Stores/Classroom/Story/resultsScreenShown";
import audioDurationAtom from "../../../../Stores/Classroom/audioDuration";
import mediaRecorderAtom from "../../../../Stores/Misc/mediaRecorder";
import playMicrophoneOnAudio from "../../../../Utilities/playMicrophoneOnAudio";

const CentralPlayingMicrophone = () => {
  const [highlightedPage, setHighlightedPage] =
    useRecoilState(highlightedPageAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const sentences = useData("sentences");
  const [highlightVisible, setHighlightVisible] =
    useRecoilState(highlightVisibleAtom);
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [scores, setScores] = useRecoilState(scoresAtom);
  const { level } = useParams();
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [mediaRecorder, setMediaRecorder] = useRecoilState(mediaRecorderAtom);
  const recordVoice = async () => {
    try {
      Howler.unload();
      await playMicrophoneOnAudio();
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
  const onClickPlayingMicrophone = () => {
    recordVoice();
  };
  return (
    <CentralPlayingMicrophoneContainer onClick={onClickPlayingMicrophone}>
      <>
        <OuterCircle />
        <InnerCircle />
        <Wave />
      </>
      <CentralPlayingMicrophoneImage
        src={`/assets/images/icons/microphone_idle.svg`}
        alt={"Microphone"}
      />
    </CentralPlayingMicrophoneContainer>
  );
};

export default CentralPlayingMicrophone;
