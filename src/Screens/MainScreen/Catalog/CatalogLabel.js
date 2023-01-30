const CatalogLabel = ({ label }) => {
  return (
    <div className={`absolute bottom-2 left-2`}>
      <p className={`bg-[#1AB9C5] text-white text-[14px] py-1 px-3 rounded-lg`}>
        Lv {label}
      </p>
    </div>
  );
};

export default CatalogLabel;
