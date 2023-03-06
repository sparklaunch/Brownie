import { AccountDeletionText } from "./AccountDeletionStyles";
import Swal from "sweetalert2";
import Constants from "../../../Utilities/Constants";
import { authAxios } from "../../../Utilities/AxiosInstances";

const AccountDeletion = () => {
  const requestAccountDeletion = async () => {
    const response = await authAxios.post("/api/ap003", {
      user_no: sessionStorage.getItem("userNumber")
    });
    const stringResponse = JSON.stringify(response, null, 2);
    console.log(stringResponse);
    switch (response.data.resultCode) {
      case "100":
        await Swal.fire(Constants.ACCOUNT_DELETION_SUCCESS);
        sessionStorage.clear();
        window.location.href = "/";
        break;
      default:
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
      cancelButtonText: "취소",
      reverseButtons: true
    })
      .then((result) => {
        if (result.isConfirmed) {
          requestAccountDeletion();
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
