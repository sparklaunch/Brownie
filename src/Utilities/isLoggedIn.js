const isLoggedIn = () => {
  const userNumber = sessionStorage.getItem("userNumber");
  const studentName = sessionStorage.getItem("studentName");
  if (userNumber === null || studentName === null) {
    return false;
  } else {
    return userNumber;
  }
};

export default isLoggedIn;
