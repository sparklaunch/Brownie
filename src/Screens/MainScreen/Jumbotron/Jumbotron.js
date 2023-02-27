import JumbotronForm from "./JumbotronForm/JumbotronForm";
import {
  JumbotronFormContainer,
  JumbotronInnerContainer,
  JumbotronOuterContainer,
  JumbotronSwiperContainer
} from "./JumbotronStyles";
import JumbotronSwiper from "./JumbotronSwiper";

const Jumbotron = () => {
  return (
    <JumbotronOuterContainer>
      <JumbotronSwiperContainer>
        <JumbotronSwiper />
      </JumbotronSwiperContainer>
      <JumbotronInnerContainer>
        <JumbotronFormContainer>
          <JumbotronForm />
        </JumbotronFormContainer>
      </JumbotronInnerContainer>
    </JumbotronOuterContainer>
  );
};

export default Jumbotron;
