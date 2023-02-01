import { Tab, Tabs } from "@mui/material";
import { useRecoilState } from "recoil";
import myPageTabValueAtom from "../../Stores/MyPage/myPageTabValue";

const MyPageTabs = () => {
  const [myPageTabValue, setMyPageTabValue] =
    useRecoilState(myPageTabValueAtom);
  return (
    <div className={`flex flex-row justify-center py-6`}>
      <div className={`w-[1200px] flex flex-row justify-center`}>
        <Tabs
          value={myPageTabValue}
          onChange={(event, newValue) => setMyPageTabValue(newValue)}
        >
          <Tab label={"학습 현황"} />
          <Tab label={"회원 정보"} />
          <Tab label={"쿠폰 등록 / 확인"} />
        </Tabs>
      </div>
    </div>
  );
};

export default MyPageTabs;
