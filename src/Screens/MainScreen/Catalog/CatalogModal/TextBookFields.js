import { MenuItem, Select } from "@mui/material";
import { useRecoilState } from "recoil";
import gradeAtom from "../../../../Stores/Catalog/grade";

const TextBookFields = () => {
  const [grade, setGrade] = useRecoilState(gradeAtom);
  return (
    <div>
      <Select
        label="grade"
        value={grade}
        onChange={(event) => setGrade(event.target.value)}
      >
        <MenuItem value={1}>1학년</MenuItem>
        <MenuItem value={2}>2학년</MenuItem>
        <MenuItem value={3}>3학년</MenuItem>
        <MenuItem value={4}>4학년</MenuItem>
        <MenuItem value={5}>5학년</MenuItem>
        <MenuItem value={6}>6학년</MenuItem>
      </Select>
    </div>
  );
};

export default TextBookFields;
