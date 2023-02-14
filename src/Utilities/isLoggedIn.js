const isLoggedIn = () => {
  const userNumber = sessionStorage.getItem("userNumber");
  if (userNumber === null) {
    return false;
  } else {
    return userNumber;
  }
};

export default isLoggedIn;
