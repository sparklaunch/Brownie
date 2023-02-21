import {
  TextBookHeaderInnerContainer,
  TextBookHeaderOuterContainer,
  TextBookHeaderRectangle,
  TextBookHeaderTitle
} from "./TextBookHeaderStyles";

const TextBookHeader = () => {
  return (
    <TextBookHeaderOuterContainer>
      <TextBookHeaderInnerContainer>
        <TextBookHeaderRectangle
          src={`/assets/images/rectangle.svg`}
          alt={`Rectangle Icon`}
        />
        <TextBookHeaderTitle>교재 구성</TextBookHeaderTitle>
      </TextBookHeaderInnerContainer>
    </TextBookHeaderOuterContainer>
  );
};

export default TextBookHeader;
