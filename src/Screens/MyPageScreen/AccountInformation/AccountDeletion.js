import { AccountDeletionText } from "./AccountDeletionStyles";
import Swal from "sweetalert2";
import Constants from "../../../Utilities/Constants";
import { authAxios } from "../../../Utilities/AxiosInstances";

const AccountDeletion = () => {
  const requestAccountDeletion = async () => {
    const response = await authAxios.post("/api/ap003", {
      // 회원 탈퇴 API를 호출합니다.
      user_no: sessionStorage.getItem("userNumber")
    });
    const stringResponse = JSON.stringify(response, null, 2);
    console.log(stringResponse);
    switch (
      response.data.resultCode // 결과 코드에 따라서 다른 동작을 합니다.
    ) {
      case "100": // 회원 탈퇴에 성공했습니다.
        await Swal.fire(Constants.ACCOUNT_DELETION_SUCCESS);
        sessionStorage.clear(); // 세션 스토리지를 비웁니다.
        window.location.href = "/"; // 메인 페이지로 강제 이동합니다.
        break;
      default: // 서버 오류
        await Swal.fire(Constants.SERVER_ERROR);
        break;
    }
  };
  const onClickAccountDeletion = () => {
    Swal.fire({
      title: "회원 탈퇴",
      text: "정말로 회원 탈퇴를 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "탈퇴",
      confirmButtonColor: Constants.ACCENT_COLOR,
      cancelButtonText: "취소",
      reverseButtons: true
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          // 확인 버튼을 눌렀을 때
          await requestAccountDeletion();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AccountDeletionText onClick={onClickAccountDeletion}>
      회원 탈퇴
    </AccountDeletionText>
  );
};

export default AccountDeletion;
