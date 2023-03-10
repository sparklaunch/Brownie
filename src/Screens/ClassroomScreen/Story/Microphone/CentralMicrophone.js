import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import CentralIdleMicrophone from "./CentralIdleMicrophone";
import CentralInvisibleMicrophone from "./CentralInvisibleMicrophone";
import CentralPlayingMicrophone from "./CentralPlayingMicrophone";
import { useEffect } from "react";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import { useParams } from "react-router-dom";
import shouldAudioPlayAtom from "../../../../Stores/Classroom/shouldAudioPlay";

const CentralMicrophone = () => {
  const { level } = useParams();
  const currentPage = useRecoilValue(currentPageAtom);
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const setShouldAudioPlay = useSetRecoilState(shouldAudioPlayAtom);
  const scores = useRecoilValue(scoresAtom);
  useEffect(() => {
    if (currentPage === 10 && scores[`${level}-10`] !== undefined) {
      // 10페이지가 완료되었고, 10페이지의 점수가 undefined가 아니라면,
      setCentralMicrophoneState("completed");
    } else if (currentPage === 0 && scores[`${level}-1`] !== undefined) {
      // 1페이지가 완료되었고, 1페이지의 점수가 undefined가 아니라면,
      setCentralMicrophoneState("completed");
    } else if (
      // 현재 페이지가 완료되었고, 현재의 오른쪽 페이지의 점수가 undefined가 아니라면,
      scores[`${level}-${currentPage}`] !== undefined &&
      scores[`${level}-${currentPage + 1}`] !== undefined
    ) {
      setCentralMicrophoneState("completed");
    } else {
      // 그 외의 경우에는,
      setCentralMicrophoneState("idle");
    }
  }, [currentPage]);
  useEffect(() => {
    switch (centralMicrophoneState) {
      case "idle":
        setShouldAudioPlay(true);
        break;
      case "disabled":
        setShouldAudioPlay(false);
        break;
      case "invisible":
        setShouldAudioPlay(false);
        break;
      case "loading":
        setShouldAudioPlay(false);
        break;
      case "completed":
        setShouldAudioPlay(true);
        break;
      case "resultsShowing":
        setShouldAudioPlay(false);
        break;
      default:
        setShouldAudioPlay(true);
        break;
    }
  }, [centralMicrophoneState]);
  switch (centralMicrophoneState) {
    case "idle":
      return <CentralIdleMicrophone />;
    case "disabled":
      return <CentralPlayingMicrophone />;
    case "invisible":
      return <CentralInvisibleMicrophone />;
    case "loading":
      return <></>;
    case "completed":
      return <></>;
    case "resultsShowing":
      return <></>;
  }
};

export default CentralMicrophone;
