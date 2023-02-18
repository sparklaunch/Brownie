const FeatureSpecimen = () => {
  return (
    <div>
      <img
        src={`/assets/images/feature.png`}
        alt={`Feature`}
        className={`mb-[36px] w-[600px]`}
      />
      <div className={`text-center`}>
        <p className={`text-[#515151] text-[20px]`}>
          파닉스 알파벳에 유의하여 읽을 수 있도록
        </p>
        <p className={`text-[#515151] text-[20px]`}>알파벳에 강조 색상 적용.</p>
      </div>
    </div>
  );
};

export default FeatureSpecimen;
