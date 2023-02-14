const EmptyPage = ({ direction }) => {
  return (
    <div
      className={`absolute left-0 top-0 bottom-0 right-0 bg-white ${
        direction === `left` ? `rounded-l-2xl` : `rounded-r-2xl`
      }`}
    />
  );
};

export default EmptyPage;
