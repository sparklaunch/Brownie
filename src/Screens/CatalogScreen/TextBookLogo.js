import {
  TextBookLogoContainer,
  TextBookLogoDescription,
  TextBookLogoDescriptions,
  TextBookLogoImage
} from "./TextBookLogoStyles";

const TextBookLogo = () => {
  return (
    <TextBookLogoContainer>
      <TextBookLogoImage
        src={`/assets/images/pfr_logo.png`}
        alt={`Phonics Fun Readers Logo`}
      />
      <TextBookLogoDescriptions>
        <TextBookLogoDescription>
          <strong>교육 대상</strong> : 유아 ~ 초등 저학년 (Kindergarten ~
          Elementary).
        </TextBookLogoDescription>
        <TextBookLogoDescription>
          <strong>구성</strong> : Levels 1 ~ 5.
        </TextBookLogoDescription>
      </TextBookLogoDescriptions>
    </TextBookLogoContainer>
  );
};

export default TextBookLogo;
