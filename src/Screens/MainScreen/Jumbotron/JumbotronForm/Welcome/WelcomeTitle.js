const WelcomeTitle = () => {
  const studentName = sessionStorage.getItem("studentName");
  return (
    <div className={`text-center`}>
      <p className={`font-black text-white text-xl mb-2`}>{studentName} 학생</p>
      <p className={`text-white text-lg`}>안녕하세요!</p>
    </div>
  );
};

export default WelcomeTitle;
