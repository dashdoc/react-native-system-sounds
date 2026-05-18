import { NativeModule, requireNativeModule } from "expo";

declare class RNSystemSoundsNativeModule extends NativeModule {
  playSystemSound(soundID: number): void;
  stopSystemSound(): void;
}

export default requireNativeModule<RNSystemSoundsNativeModule>(
  "RNSystemSounds",
);
