import Background from "../Background";
import Card from "./Card";
import { WordScreenContainer } from "./WordScreenStyles";

const WordScreen = () => {
  return (
    <WordScreenContainer>
      <Background />
      <Card />
    </WordScreenContainer>
  );
};

export default WordScreen;
