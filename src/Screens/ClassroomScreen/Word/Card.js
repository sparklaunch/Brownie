import CardContent from "./CardContent";

const Card = () => {
  return (
    <div
      className={`absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center`}
    >
      <div
        className={`w-[70vw] h-[46vw] bg-white rounded-xl shadow-2xl overflow-clip`}
      >
        <CardContent />
      </div>
    </div>
  );
};

export default Card;
