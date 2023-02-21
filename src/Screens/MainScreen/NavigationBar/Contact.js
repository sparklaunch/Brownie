const Contact = () => {
  return (
    <div className={`flex flex-row items-center`}>
      {/*<a href={`tel:02-308-4088`} className={`flex flex-row items-center`}>*/}
      <img src={"assets/images/icons/phone_icon.svg"} alt={"Phone Icon"} />
      <p className={`ml-[12px]`}>02-308-4088 (내선 2번)</p>
      {/*</a>*/}
    </div>
  );
};

export default Contact;
