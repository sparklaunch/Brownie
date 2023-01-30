const Footer = () => {
  return (
    <div
      className={`border-t-2 border-[#DFDFDF] p-[40px] flex flex-col items-center`}
    >
      <div
        className={`flex flex-row items-center text-[14px] text-[#707070] py-1`}
      >
        <p className={`pr-3 border-r-[1px] border-[#DFDFDF]`}>(주)키즈브라운</p>
        <p className={`pl-3`}>(04790) 서울특별시 성동구 성수일로 89, 605호</p>
      </div>
      <div
        className={`flex flex-row items-center text-[14px] text-[#707070] py-1`}
      >
        <p className={`pr-3 border-r-[1px] border-[#DFDFDF]`}>대표 : 유필상</p>
        <p className={`px-3 border-r-[1px] border-[#DFDFDF]`}>
          사업자등록번호 : 539-81-00787
        </p>
        <p className={`pl-3`}>고객센터 : 02-512-8881</p>
      </div>
    </div>
  );
};

export default Footer;
