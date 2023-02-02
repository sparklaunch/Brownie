const NotFoundScreen = () => {
  return (
    <div className={`flex flex-col h-[100vh] justify-center items-center`}>
      <p className={`font-[Jua] text-5xl mb-5`}>404, Not Found</p>
      <p className={`text-2xl`}>요청하신 페이지가 존재하지 않습니다.</p>
    </div>
  );
};

export default NotFoundScreen;
