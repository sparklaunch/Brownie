import { useRecoilState } from "recoil";
import highlightedPageAtom from "../../../../Stores/Classroom/Story/highlightedPage";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import uuid from "react-uuid";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import useData from "../../../../Hooks/useData";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import { useParams } from "react-router-dom";
import resultsScreenShownAtom from "../../../../Stores/Classroom/Story/resultsScreenShown";
import audioDurationAtom from "../../../../Stores/Classroom/audioDuration";
import highlightVisibleAtom from "../../../../Stores/Classroom/Story/highlightVisible";
import {
  LeftCompletedMicrophoneContainer,
  MyVoiceButton,
  MyVoiceButtonContainer,
  RetryButton,
  RetryButtonContainer
} from "./LeftCompletedMicrophoneStyles";
import Constants from "../../../../Utilities/Constants";
import Swal from "sweetalert2";
import { Howl, Howler } from "howler";
import mediaRecorderAtom from "../../../../Stores/Misc/mediaRecorder";
import playMicrophoneOnAudio from "../../../../Utilities/playMicrophoneOnAudio";
import { elaAxios } from "../../../../Utilities/AxiosInstances";

const LeftCompletedMicrophone = () => {
  const { level } = useParams();
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const [highlightedPage, setHighlightedPage] =
    useRecoilState(highlightedPageAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [scores, setScores] = useRecoilState(scoresAtom);
  const sentences = useData("sentences");
  const [highlightVisible, setHighlightVisible] =
    useRecoilState(highlightVisibleAtom);
  const [mediaRecorder, setMediaRecorder] = useRecoilState(mediaRecorderAtom);
  const recordVoice = async () => {
    try {
      await playMicrophoneOnAudio();
      mediaRecorder.start();
      setCentralMicrophoneState("invisible");
      mediaRecorder.ondataavailable = async (event) => {
        const blob = new Blob([event.data], { type: "audio/wav" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64Record = reader.result;
          localStorage.setItem("left_record", base64Record);
        };
        const formData = new FormData();
        formData.append("text", sentences[currentPage - 1]);
        formData.append("student_audio", event.data);
        const response = await elaAxios.post("/pron_v2/", formData);
        setHighlightVisible(false);
        const record = localStorage.getItem("left_record");
        const leftRecord = new Howl({
          src: [record]
        });
        leftRecord.play();
        const stringResponse = JSON.stringify(response, null, 2);
        console.log(stringResponse);
        const totalScore = response.data.total_score;
        setTotalScore({
          score: totalScore,
          id: uuid()
        });
        setScores((previous) => {
          return {
            ...previous,
            [`${level}-${currentPage}`]: totalScore
          };
        });
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
  const onClickRetry = async () => {
    Howler.unload();
    setHighlightedPage(currentPage);
    setResultsScreenShown(false);
    setScores((previousScores) => {
      return {
        ...previousScores,
        [`${level}-${currentPage}`]: undefined
      };
    });
    await recordVoice();
  };
  const onClickMyVoice = () => {
    Howler.unload();
    const leftRecord = localStorage.getItem("left_record");
    const leftRecordAudio = new Howl({
      src: [leftRecord]
    });
    leftRecordAudio.play();
  };
  return (
    <LeftCompletedMicrophoneContainer>
      <RetryButtonContainer onClick={onClickRetry}>
        <RetryButton
          src={`/assets/images/retry_button.svg`}
          alt={`Retry Button`}
        />
      </RetryButtonContainer>
      <MyVoiceButtonContainer onClick={onClickMyVoice}>
        <MyVoiceButton
          src={`/assets/images/my_voice_button.svg`}
          alt={`My Voice Button`}
        />
      </MyVoiceButtonContainer>
    </LeftCompletedMicrophoneContainer>
  );
};

export default LeftCompletedMicrophone;
