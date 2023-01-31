import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import idAtom from "../../../Stores/Auth/id";
import passwordAtom from "../../../Stores/Auth/password";
import InfoIcon from "@mui/icons-material/Info";

const SignUpFields = () => {
  const [id, setID] = useRecoilState(idAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  return (
    <div className={`py-3`}>
      <TextField
        id={"id"}
        value={id}
        onChange={(event) => setID(event.target.value)}
        variant={"outlined"}
        label={"아이디"}
        required={true}
        size={"medium"}
        sx={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 2,
          marginBottom: 1.5
        }}
      />
      <TextField
        id={"password"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        variant={"outlined"}
        label={"비밀번호"}
        required={true}
        size={"medium"}
        type={"password"}
        sx={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 2,
          marginBottom: 1.5
        }}
      />
      <div className={`flex flex-row items-center`}>
        <InfoIcon
          sx={{
            fill: "#ACACAC"
          }}
        />
        <p className={`text-[13px] text-[#ACACAC] ml-1`}>
          알파벳, 숫자 조합으로 최소 6자리 이상 입력하세요.
        </p>
      </div>
    </div>
  );
};

export default SignUpFields;
