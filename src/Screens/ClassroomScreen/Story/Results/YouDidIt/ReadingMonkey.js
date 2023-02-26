import {
  ReadingMonkeyContainer,
  ReadingMonkeyImage
} from "./ReadingMonkeyStyles";

const ReadingMonkey = () => {
  return (
    <ReadingMonkeyContainer>
      <ReadingMonkeyImage
        src={"/assets/images/reading_monkey.svg"}
        alt={"Reading Monkey"}
      />
    </ReadingMonkeyContainer>
  );
};

export default ReadingMonkey;
