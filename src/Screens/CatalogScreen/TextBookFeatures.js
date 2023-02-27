import {
  TextBookFeaturesContainer,
  TextBookFeaturesInnerContainer,
  TextBookFeaturesOuterContainer,
  TextBookFeaturesTitle
} from "./TextBookFeaturesStyles";
import TextBookFeature from "./TextBookFeature";

const TextBookFeatures = () => {
  return (
    <TextBookFeaturesOuterContainer>
      <TextBookFeaturesInnerContainer>
        <TextBookFeaturesTitle>Features</TextBookFeaturesTitle>
        <TextBookFeaturesContainer>
          <TextBookFeature
            text={`Smart Phonics, EFL Phonics, Speed Phonics의 어휘를 바탕으로 구성`}
          />
          <TextBookFeature
            text={`아기자기한 그림과 다양한 등장인물이 함께 하는 쉽고 재미있는 스토리`}
          />
          <TextBookFeature text={`어휘 학습을 도와주는 그림 사전 수록`} />
          <TextBookFeature
            text={`스토리와 파닉스 어휘 복습에 효과적인 워크시트 수록`}
          />
          <TextBookFeature
            text={`스토리마다 3가지의 오디오 버전 수록 (성인 원어민 읽기, 어린이 원어민 따라 읽기, 음악과 리듬에 맞춰 읽기)`}
          />
          <TextBookFeature text={`스토리를 기반으로 한 신나는 노래 연습`} />
        </TextBookFeaturesContainer>
        <TextBookFeaturesContainer>
          <TextBookFeature
            text={`Combining easy and interesting stories with lifelike illustrations and colorful, funny characters`}
          />
          <TextBookFeature
            text={`Strengthening the ability to read any English sentence that includes various phonics words and sight words`}
          />
          <TextBookFeature
            text={`Presenting phonics words with pictures in a picture dictionary`}
          />
          <TextBookFeature
            text={`Includes worksheets which help students understand the stories and review phonics words`}
          />
          <TextBookFeature
            text={`Includes audio CDs in three versions; story-telling, listen and repeat, practice`}
          />
          <TextBookFeature
            text={`Includes exciting songs based on the stories`}
          />
        </TextBookFeaturesContainer>
      </TextBookFeaturesInnerContainer>
    </TextBookFeaturesOuterContainer>
  );
};

export default TextBookFeatures;
