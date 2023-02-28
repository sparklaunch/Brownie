import {
  IntroductionTryDevicesContainer,
  IntroductionTryDevicesImage
} from "./IntroductionTryDevicesStyles";

const IntroductionTryDevices = () => {
  return (
    <IntroductionTryDevicesContainer>
      <IntroductionTryDevicesImage
        src={`/assets/images/previews.png`}
        alt={`Devices`}
      />
    </IntroductionTryDevicesContainer>
  );
};

export default IntroductionTryDevices;
