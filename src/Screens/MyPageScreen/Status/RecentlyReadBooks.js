import StatusLabels from "./StatusLabels";

const RecentlyReadBooks = () => {
  return (
    <div>
      <p className={`border-l-4 border-[#00AEA8] pl-3 mb-3 text-[20px]`}>
        최근 읽은 책
      </p>
      <StatusLabels />
    </div>
  );
};

export default RecentlyReadBooks;
