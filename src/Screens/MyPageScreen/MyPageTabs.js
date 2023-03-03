import { Tab, Tabs } from "@mui/material";
import { useRecoilState } from "recoil";
import myPageTabValueAtom from "../../Stores/MyPage/myPageTabValue";
import {
  MyPageTabsInnerContainer,
  MyPageTabsOuterContainer
} from "./MyPageTabsStyles";

const MyPageTabs = () => {
  const [myPageTabValue, setMyPageTabValue] =
    useRecoilState(myPageTabValueAtom);
  return (
    <MyPageTabsOuterContainer>
      <MyPageTabsInnerContainer>
        <Tabs
          value={myPageTabValue}
          onChange={(event, newValue) => setMyPageTabValue(newValue)}
        >
          <Tab
            label={"학습 현황"}
            sx={{
              fontFamily: "NanumSquareNeo"
            }}
          />
          <Tab
            label={"회원 정보"}
            sx={{
              fontFamily: "NanumSquareNeo"
            }}
          />
          <Tab
            label={"쿠폰 등록 / 확인"}
            sx={{
              fontFamily: "NanumSquareNeo"
            }}
          />
        </Tabs>
      </MyPageTabsInnerContainer>
    </MyPageTabsOuterContainer>
  );
};

export default MyPageTabs;
