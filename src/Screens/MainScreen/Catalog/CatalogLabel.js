const CatalogLabel = ({ label }) => {
  return (
    <div className={`absolute bottom-12 left-2 drop-shadow-md`}>
      <p className={`bg-[#1AB9C5] text-white text-[14px] py-1 px-3 rounded-lg`}>
        Lv {label}
      </p>
    </div>
  );
};

export default CatalogLabel;
