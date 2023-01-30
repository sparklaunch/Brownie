import Logo from "./Logo";
import NavigationContent from "./NavigationContent";

const NavigationBar = () => {
  return (
    <div className={`flex h-[136px] flex-row justify-between items-center`}>
      <Logo />
      <NavigationContent />
    </div>
  );
};

export default NavigationBar;
