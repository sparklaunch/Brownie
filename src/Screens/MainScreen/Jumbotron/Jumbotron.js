import JumbotronTitle from "./JumbotronTitle";
import JumbotronForm from "./JumbotronForm/JumbotronForm";
import {
  JumbotronFormContainer,
  JumbotronInnerContainer,
  JumbotronOuterContainer
} from "./JumbotronStyles";

const Jumbotron = () => {
  return (
    <JumbotronOuterContainer>
      <JumbotronInnerContainer>
        <JumbotronTitle />
        <JumbotronFormContainer>
          <JumbotronForm />
        </JumbotronFormContainer>
      </JumbotronInnerContainer>
    </JumbotronOuterContainer>
  );
};

export default Jumbotron;
