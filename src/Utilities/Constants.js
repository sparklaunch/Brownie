const Constants = {
  AUTH_API_ENDPOINT: "https://funphonics.ai:8443",
  ELA_API_ENDPOINT: "https://api.elasolution.com",
  API_KEY: "afef8c94d1094b58a3fc58e743eb9913",
  ACCENT_COLOR: "#1AB9C5",
  TURQUOISE: "#15B58F",
  ORANGE: "#FFA63D",
  YELLOW: "#FFD53D",
  WHITE: "#F9F9F9",
  LIGHT_SKYBLUE: "#E8F6F8",
  LIGHT_GRAY: "#DFDFDF",
  DARK_GRAY: "#515151",
  CHARCOAL: "#3D3D3D",
  EXCELLENT_THRESHOLD: 75,
  GOOD_THRESHOLD: 55,
  WORD_EXCELLENT_THRESHOLD: 75,
  WORD_GOOD_THRESHOLD: 60,
  LAPTOP_CONTAINER_WIDTH: "900px",
  DESKTOP_CONTAINER_WIDTH: "1200px",
  TABLET_CONTAINER_WIDTH: "90%",
  MOBILE_CONTAINER_WIDTH: "90%",
  MICROPHONE_NOT_FOUND: {
    title: "마이크를 발견할 수 없음",
    text: "마이크를 연결해주세요.",
    icon: "question",
    confirmButtonText: "확인"
  },
  MICROPHONE_PERMISSION_DENIED: {
    title: "마이크 사용 권한 없음",
    text: "마이크 사용 권한을 허용해주세요.",
    icon: "info",
    confirmButtonText: "확인"
  },
  MICROPHONE_EXCEPTION: {
    title: "알 수 없는 에러",
    text: "알 수 없는 에러가 발생하였습니다.",
    icon: "error",
    confirmButtonText: "확인"
  },
  WELCOME: {
    title: "환영합니다!",
    text: "Phonics Fun Readers에 오신 것을 환영합니다.",
    icon: "success",
    confirmButtonText: "시작하기"
  },
  INVALID_ACCOUNT: {
    title: "계정 정보가 존재하지 않음",
    text: "아이디와 비밀번호를 다시 한번 확인해주세요.",
    icon: "error",
    confirmButtonText: "확인"
  },
  SIGN_IN_FAILED: {
    title: "로그인 실패",
    text: "필요한 정보를 모두 입력해주세요.",
    icon: "error",
    confirmButtonText: "확인"
  },
  SERVER_ERROR: {
    title: "서버 에러",
    text: "서버 에러가 발생하였습니다.",
    icon: "error",
    confirmButtonText: "확인"
  },
  EMPTY_ID: {
    title: "아이디 에러",
    text: "아이디를 입력해주세요.",
    icon: "warning",
    confirmButtonText: "확인"
  },
  EMPTY_PASSWORD: {
    title: "비밀번호 에러",
    text: "비밀번호를 입력해주세요.",
    icon: "warning",
    confirmButtonText: "확인"
  },
  SIGN_IN_SUCCEEDED: {
    title: "로그인 성공",
    text: "로그인에 성공하였습니다.",
    icon: "success",
    confirmButtonText: "확인"
  },
  INVALID_PASSWORD: {
    title: "비밀번호 에러",
    text: "비밀번호를 다시 한번 확인해주세요.",
    icon: "error",
    confirmButtonText: "확인"
  },
  SIGN_UP_SUCCEEDED: {
    title: "회원가입 성공",
    text: "회원가입에 성공하였습니다.",
    icon: "success",
    confirmButtonText: "확인"
  },
  SIGN_UP_FAILED: {
    title: "회원가입 실패",
    text: "필요한 정보를 모두 입력해주세요.",
    icon: "error",
    confirmButtonText: "확인"
  },
  ID_ALREADY_EXISTS: {
    title: "아이디 중복",
    text: "이미 존재하는 아이디입니다.",
    icon: "error",
    confirmButtonText: "확인"
  },
  PASSWORD_NOT_VALID: {
    title: "비밀번호 에러",
    text: "비밀번호는 영문, 숫자, 특수문자를 포함한 6~24자리로 입력해주세요.",
    icon: "warning",
    confirmButtonText: "확인"
  },
  EMPTY_PASSWORD_CONFIRMATION: {
    title: "비밀번호 확인 에러",
    text: "비밀번호 확인을 입력해주세요.",
    icon: "warning",
    confirmButtonText: "확인"
  },
  PASSWORD_NOT_MATCH: {
    title: "비밀번호 확인 에러",
    text: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
    icon: "warning",
    confirmButtonText: "확인"
  },
  EMPTY_PHONE_NUMBER: {
    title: "전화번호 에러",
    text: "전화번호를 입력해주세요.",
    icon: "warning",
    confirmButtonText: "확인"
  },
  PHONE_NUMBER_NOT_VALID: {
    title: "전화번호 에러",
    text: "전화번호 형식이 올바르지 않습니다.",
    icon: "warning",
    confirmButtonText: "확인"
  },
  EMPTY_STUDENT_NAME: {
    title: "학생 이름 에러",
    text: "학생 이름을 입력해주세요.",
    icon: "warning",
    confirmButtonText: "확인"
  },
  TERMS_UNCHECKED: {
    title: "약관 동의 에러",
    text: "약관에 동의해주세요.",
    icon: "warning",
    confirmButtonText: "확인"
  },
  EMPTY_COUPON_CODE: {
    title: "쿠폰 코드 에러",
    text: "쿠폰 코드를 입력해주세요.",
    icon: "warning",
    confirmButtonText: "확인"
  },
  INCORRECT_PASSWORD: {
    title: "비밀번호 에러",
    text: "비밀번호를 다시 한번 확인해주세요.",
    icon: "error",
    confirmButtonText: "확인"
  },
  EMPTY_BIRTH_DATE: {
    title: "생년월일 에러",
    text: "생년월일을 입력해주세요.",
    icon: "warning",
    confirmButtonText: "확인"
  },
  ACCOUNT_MODIFICATION_SUCCESS: {
    title: "회원 정보 변경 성공",
    text: "회원 정보 변경에 성공하였습니다.",
    icon: "success",
    confirmButtonText: "확인"
  },
  ACCOUNT_MODIFICATION_FAILED: {
    title: "회원 정보 변경 실패",
    text: "회원 정보 변경에 필요한 정보를 확인해주세요.",
    icon: "error",
    confirmButtonText: "확인"
  },
  ACCOUNT_NOT_FOUND: {
    title: "회원 정보 없음",
    text: "회원 정보가 존재하지 않습니다.",
    icon: "error",
    confirmButtonText: "확인"
  },
  ACCOUNT_DELETION_SUCCESS: {
    title: "회원 탈퇴 성공",
    text: "회원 탈퇴에 성공하였습니다.",
    icon: "success",
    confirmButtonText: "확인"
  }
};

export default Constants;
