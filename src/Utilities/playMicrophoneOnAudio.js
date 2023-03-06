import { Howl } from "howler";

const playMicrophoneOnAudio = () => {
  return new Promise((resolve, reject) => {
    const microphoneOnAudio = new Howl({
      src: ["/assets/audio/microphone_on.wav"],
      onend: () => {
        resolve("Microphone-on audio finished playing.");
      }
    });
    microphoneOnAudio.play();
  });
};

export default playMicrophoneOnAudio;
