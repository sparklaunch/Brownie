import { TextBookLogoContainer, TextBookLogoImage } from "./TextBookLogoStyles";

const TextBookLogo = () => {
  return (
    <TextBookLogoContainer>
      <TextBookLogoImage
        src={`/assets/images/pfr_logo.png`}
        alt={`Phonics Fun Readers Logo`}
      />
    </TextBookLogoContainer>
  );
};

export default TextBookLogo;
