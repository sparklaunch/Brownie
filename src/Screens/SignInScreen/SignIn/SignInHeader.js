const SignInHeader = () => {
  return (
    <div className={`flex flex-row justify-between items-center mb-3`}>
      <img
        src="assets/images/logos/main_logo.png"
        alt="KidsBrown Logo"
        className={`w-[180px]`}
      />
      <p className={`text-[18px]`}>로그인</p>
    </div>
  );
};

export default SignInHeader;
