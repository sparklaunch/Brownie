const MyInformation = () => {
  return (
    <>
      <p className={`border-l-4 border-[#00AEA8] pl-3 mb-3 text-[20px]`}>
        내 정보
      </p>
      <div
        className={`p-8 border-[1px] border-[#DFDFDF] rounded-lg text-[18px] grid gap-3`}
      >
        <p>이름 : 홍길동</p>
        <p>구매상품 : 패키지 A 상품</p>
        <p>
          이용쿠폰 :{" "}
          <span className={`text-[#F34D7E]`}>A001 23 E01 06 0001</span>
        </p>
        <p>이용기간 : 2023.05.06 ~ 2023.12.31</p>
      </div>
    </>
  );
};

export default MyInformation;
