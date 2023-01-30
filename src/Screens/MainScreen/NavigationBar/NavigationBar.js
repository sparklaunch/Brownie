import Logo from "./Logo";
import NavigationContent from "./NavigationContent";

const NavigationBar = () => {
  return (
    <div className={`flex justify-center`}>
      <div
        className={`flex w-[1200px] h-[136px] flex-row justify-between items-center`}
      >
        <Logo />
        <NavigationContent />
      </div>
    </div>
  );
};

export default NavigationBar;
