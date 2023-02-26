import { YouDidItTextContainer, YouDidItTextImage } from "./YouDidItTextStyles";

const YouDidItText = () => {
  return (
    <YouDidItTextContainer>
      <YouDidItTextImage
        src={`/assets/images/you_did_it.svg`}
        alt={`You did it text`}
      />
    </YouDidItTextContainer>
  );
};

export default YouDidItText;
