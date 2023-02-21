import {
  TextBookHeaderOuterContainer,
  TextBookHeaderRectangle
} from "./TextBookHeaderStyles";

const TextBookHeader = () => {
  return (
    <TextBookHeaderOuterContainer>
      <TextBookHeaderRectangle
        src={`/assets/images/rectangle.svg`}
        alt={`Rectangle Icon`}
      />
    </TextBookHeaderOuterContainer>
  );
};

export default TextBookHeader;
