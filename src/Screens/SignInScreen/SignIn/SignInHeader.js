const SignInHeader = () => {
  return (
    <div
      className={`flex flex-row justify-between items-center bg-[#F9F9F9] px-[24px] py-[14px] border-2 border-t-0 border-[#DFDFDF] rounded-b-lg`}
    >
      <img src="assets/images/logo.png" alt="KidsBrown Logo" />
      <p className={`text-[18px]`}>로그인</p>
    </div>
  );
};

export default SignInHeader;
