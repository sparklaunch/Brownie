import { MenuItem, Select } from "@mui/material";

const TextBookFields = () => {
  return (
    <div>
      <Select label="grade">
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </Select>
    </div>
  );
};

export default TextBookFields;
