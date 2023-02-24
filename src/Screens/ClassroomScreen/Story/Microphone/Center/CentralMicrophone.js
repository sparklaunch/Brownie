import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import CentralIdleMicrophone from "./CentralIdleMicrophone";
import CentralInvisibleMicrophone from "./CentralInvisibleMicrophone";
import CentralPlayingMicrophone from "./CentralPlayingMicrophone";
import { useEffect } from "react";
import currentPageAtom from "../../../../../Stores/Classroom/Story/currentPage";
import scoresAtom from "../../../../../Stores/Classroom/Story/scores";
import { useParams } from "react-router-dom";

const CentralMicrophone = () => {
  const { level } = useParams();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [scores, setScores] = useRecoilState(scoresAtom);
  useEffect(() => {
    if (currentPage === 10 && scores[`${level}-10`] !== undefined) {
      setCentralMicrophoneState("completed");
    } else if (currentPage === 0 && scores[`${level}-1`] !== undefined) {
      setCentralMicrophoneState("completed");
    } else if (
      scores[`${level}-${currentPage}`] !== undefined &&
      scores[`${level}-${currentPage + 1}`] !== undefined
    ) {
      setCentralMicrophoneState("completed");
    } else {
      setCentralMicrophoneState("idle");
    }
  }, [currentPage]);
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
  }
};

export default CentralMicrophone;
