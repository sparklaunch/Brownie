import {
  TextBookDownload,
  TextBookDownloadsContainer,
  TextBookDownloadsTitle
} from "./TextBookDownloadsStyles";

const TextBookDownloads = () => {
  return (
    <TextBookDownloadsContainer>
      <TextBookDownloadsTitle>Downloads</TextBookDownloadsTitle>
      <TextBookDownload>Answer key</TextBookDownload>
      <TextBookDownload>MP3</TextBookDownload>
      <TextBookDownload>Parents guide</TextBookDownload>
    </TextBookDownloadsContainer>
  );
};

export default TextBookDownloads;
