import Background from "../Background";
import Book from "./Book";
import { StoryScreenContainer } from "./StoryScreenStyles";

const StoryScreen = () => {
  return (
    <StoryScreenContainer>
      <Background />
      <Book />
    </StoryScreenContainer>
  );
};

export default StoryScreen;
