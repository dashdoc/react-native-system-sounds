import {NativeModules, Platform} from "react-native";
import {AndroidSoundIDs, iOSSoundIDs} from "./constants";

const {RNSystemSounds: RNSystemSoundsNativeModule} = NativeModules;

type TSoundId =
  | typeof AndroidSoundIDs[keyof typeof AndroidSoundIDs]
  | typeof iOSSoundIDs[keyof typeof iOSSoundIDs];

class RNSystemSounds {
  static AndroidSoundIDs = AndroidSoundIDs;

  static iOSSoundIDs = iOSSoundIDs;

  static Beeps = {
    Positive: Platform.select({
      ios: iOSSoundIDs.Headset_AnswerCall,
      android: AndroidSoundIDs.TONE_PROP_BEEP,
    }),
    Negative: Platform.select({
      ios: iOSSoundIDs.Headset_EndCall,
      android: AndroidSoundIDs.TONE_PROP_ACK,
    }),
  };

  static play(soundID: TSoundId) {
    if (Platform.OS === "android") {
      RNSystemSoundsNativeModule.stopSystemSound();
    }

    RNSystemSoundsNativeModule.playSystemSound(soundID);
  }

  static beep(soundID: TSoundId = this.Beeps.Positive as TSoundId) {
    this.play(soundID);
  }
}

export default RNSystemSounds;
