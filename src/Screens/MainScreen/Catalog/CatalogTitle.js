const CatalogTitle = ({ data }) => {
  const { title } = data;
  return (
    <div>
      <p className={`text-[16px] bg-[#E8F6F8] p-1 mt-2 rounded-md`}>{title}</p>
    </div>
  );
};

export default CatalogTitle;
