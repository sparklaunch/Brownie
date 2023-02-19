import NavigationContentTop from "./NavigationContentTop";
import NavigationContentBottom from "./NavigationContentBottom";
import Hamburger from "./Hamburger";

const NavigationContent = () => {
  if (window.innerWidth >= 768 && window.innerHeight <= 1279) {
    return <Hamburger />;
  } else {
    return (
      <div>
        <NavigationContentTop />
        <NavigationContentBottom />
      </div>
    );
  }
};

export default NavigationContent;
