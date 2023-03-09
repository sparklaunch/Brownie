const isLoggedIn = () => {
  const userNumber = sessionStorage.getItem("userNumber");
  const studentName = sessionStorage.getItem("studentName");
  if (userNumber === null || studentName === null) {
    // 유저 넘버나 학생 이름이 없으면, 로그인이 안 된 것이므로 false를 리턴
    return false;
  } else {
    // 유저 넘버와 학생 이름이 있으면, 로그인이 된 것이므로 true를 리턴
    return userNumber;
  }
};

export default isLoggedIn;
