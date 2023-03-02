import { AccountDeletionText } from "./AccountDeletionStyles";
import Swal from "sweetalert2";
import Constants from "../../../Utilities/Constants";
import axios from "axios";

const AccountDeletion = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  const requestAccountDeletion = async () => {
    const response = await axios.post(
      `${Constants.AUTH_API_ENDPOINT}/api/ap003`,
      {
        user_no: sessionStorage.getItem("userNumber")
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*"
        }
      }
    );
    const stringResponse = JSON.stringify(response, null, 2);
    console.log(stringResponse);
    switch (response.data.resultCode) {
      case "100":
        break;
      default:
        break;
    }
  };
  const onClickAccountDeletion = () => {
    swalWithBootstrapButtons
      .fire({
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
