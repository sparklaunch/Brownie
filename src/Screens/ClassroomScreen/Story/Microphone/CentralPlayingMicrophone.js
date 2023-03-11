import { Howler } from "howler";
import { useRecoilValue, useSetRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import {
  CentralPlayingMicrophoneContainer,
  CentralPlayingMicrophoneImage,
  InnerCircle,
  OuterCircle,
  Wave
} from "./CentralPlayingMicrophoneStyles";
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
import { elaAxios } from "../../../../Utilities/AxiosInstances";

const CentralPlayingMicrophone = () => {
  const { level } = useParams();
  const highlightedPage = useRecoilValue(highlightedPageAtom);
  const currentPage = useRecoilValue(currentPageAtom);
  const sentences = useData("sentences");
  const setHighlightVisible = useSetRecoilState(highlightVisibleAtom);
  const setTotalScore = useSetRecoilState(totalScoreAtom);
  const setScores = useSetRecoilState(scoresAtom);
  const setResultsScreenShown = useSetRecoilState(resultsScreenShownAtom);
  const audioDuration = useRecoilValue(audioDurationAtom);
  const setCentralMicrophoneState = useSetRecoilState(
    centralMicrophoneStateAtom
  );
  const mediaRecorder = useRecoilValue(mediaRecorderAtom);
  const recordVoice = async () => {
    try {
      Howler.unload(); // Howler의 모든 사운드를 unload합니다.
      await playMicrophoneOnAudio(); // 마이크 온 음원을 재생합니다.
      mediaRecorder.start(); // 녹음을 시작합니다.
      setCentralMicrophoneState("invisible");
      mediaRecorder.ondataavailable = async (event) => {
        // 녹음이 끝나고, 녹음된 음원이 재생 가능하다면,
        const blob = new Blob([event.data], { type: "audio/wav" }); // 녹음된 음원을 Blob 객체로 변환합니다.
        const reader = new FileReader(); // FileReader 객체를 생성합니다.
        reader.readAsDataURL(blob); // Blob 객체를 읽습니다.
        reader.onloadend = () => {
          // Blob 객체를 읽는 것이 끝나면,
          const base64Record = reader.result; // base64로 인코딩된 녹음된 음원을 가져옵니다.
          if (highlightedPage !== currentPage) {
            // 현재 페이지가 하이라이트된 페이지와 다르다면, 즉, 오른쪽 페이지라면,
            localStorage.setItem("right_record", base64Record);
          } else {
            localStorage.setItem("left_record", base64Record);
          }
        };
        const formData = new FormData(); // FormData 객체를 생성합니다.
        if (highlightedPage !== currentPage) {
          // 현재 페이지가 하이라이트된 페이지와 다르다면, 즉, 오른쪽 페이지라면,
          formData.append("text", sentences[currentPage]); // 현재 페이지의 문장을 FormData에 추가합니다.
        } else {
          formData.append("text", sentences[currentPage - 1]); // 현재의 오른쪽 페이지의 문장을 FormData에 추가합니다.
        }
        formData.append("student_audio", event.data); // 녹음된 음원을 FormData에 추가합니다.
        const response = await elaAxios.post("/pron_v2/", formData); // 서버에 FormData를 전송합니다.
        setHighlightVisible(false);
        const stringResponse = JSON.stringify(response, null, 2);
        console.log(stringResponse);
        const totalScore = response.data.total_score;
        setTotalScore({
          score: totalScore,
          id: uuid()
        }); // 전체 점수를 저장합니다.
        if (highlightedPage !== currentPage) {
          // 현재 페이지가 하이라이트된 페이지와 다르다면, 즉, 오른쪽 페이지라면,
          setScores((previous) => {
            return {
              ...previous,
              [`${level}-${currentPage + 1}`]: totalScore
            };
          }); // 오른쪽 페이지의 점수를 저장합니다.
        } else {
          // 현재 페이지가 하이라이트된 페이지와 같다면, 즉, 왼쪽 페이지라면,
          setScores((previous) => {
            return {
              ...previous,
              [`${level}-${currentPage}`]: totalScore
            };
          }); // 왼쪽 페이지의 점수를 저장합니다.
        }
        if (highlightedPage !== currentPage) {
          // 현재 페이지가 하이라이트된 페이지와 다르다면, 즉, 오른쪽 페이지라면,
          setCentralMicrophoneState("completed"); // 오른쪽 페이지까지 완료된 것이므로, 마이크를 Completed 상태로 변환합니다.
        }
        setResultsScreenShown(true); // 결과 화면을 보여줍니다.
      };
      setTimeout(() => {
        // audioDuration 이후에,
        mediaRecorder.stop(); // 녹음을 중지합니다.
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
  const onClickPlayingMicrophone = async () => {
    await recordVoice();
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
