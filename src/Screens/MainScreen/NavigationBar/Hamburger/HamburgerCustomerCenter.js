import {
  ContactContainer,
  ContactText,
  CustomerCenterText,
  HamburgerCustomerCenterContainer,
  PhoneIconImage
} from "./HamburgerCustomerCenterStyles";

const HamburgerCustomerCenter = () => {
  return (
    <HamburgerCustomerCenterContainer>
      <CustomerCenterText>고객센터</CustomerCenterText>
      <ContactContainer>
        <PhoneIconImage
          src={`/assets/images/icons/phone_icon.svg`}
          alt={`Phone Icon`}
        />
        <ContactText>02-512-8881</ContactText>
      </ContactContainer>
    </HamburgerCustomerCenterContainer>
  );
};

export default HamburgerCustomerCenter;
