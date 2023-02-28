import {
  ContactContainer,
  ContactNumberText,
  PhoneIcon
} from "./ContactStyles";

const Contact = () => {
  return (
    <ContactContainer>
      <PhoneIcon
        src={"assets/images/icons/phone_icon.svg"}
        alt={"Phone Icon"}
      />
      <ContactNumberText>02-512-8881</ContactNumberText>
    </ContactContainer>
  );
};

export default Contact;
