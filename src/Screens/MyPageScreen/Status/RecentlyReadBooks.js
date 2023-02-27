import StatusLabels from "./StatusLabels";

const RecentlyReadBooks = () => {
  return (
    <>
      <p className={`border-l-4 border-[#00AEA8] pl-3 mb-3 text-[20px]`}>
        최근 읽은 책
      </p>
      <StatusLabels />
      <div className={`h-[600px]`}></div>
    </>
  );
};

export default RecentlyReadBooks;
