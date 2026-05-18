const mockNativeModule = {
  playSystemSound: jest.fn(),
  stopSystemSound: jest.fn(),
};

function loadModule(platform: "android" | "ios") {
  jest.resetModules();
  global.__RN_SYSTEM_SOUNDS_PLATFORM__ = platform;
  global.__RN_SYSTEM_SOUNDS_NATIVE_MODULE__ = mockNativeModule;
  mockNativeModule.playSystemSound.mockClear();
  mockNativeModule.stopSystemSound.mockClear();

  return require("../../src").default;
}

describe("RNSystemSounds", () => {
  it("stops the previous Android tone before playing a new one", () => {
    const RNSystemSounds = loadModule("android");

    RNSystemSounds.play(RNSystemSounds.AndroidSoundIDs.TONE_PROP_BEEP);

    expect(mockNativeModule.stopSystemSound).toHaveBeenCalledTimes(1);
    expect(mockNativeModule.playSystemSound).toHaveBeenCalledWith(
      RNSystemSounds.AndroidSoundIDs.TONE_PROP_BEEP
    );
  });

  it("does not call the Android stop method on iOS", () => {
    const RNSystemSounds = loadModule("ios");

    RNSystemSounds.play(RNSystemSounds.iOSSoundIDs.Headset_AnswerCall);

    expect(mockNativeModule.stopSystemSound).not.toHaveBeenCalled();
    expect(mockNativeModule.playSystemSound).toHaveBeenCalledWith(
      RNSystemSounds.iOSSoundIDs.Headset_AnswerCall
    );
  });

  it("uses the platform-specific positive beep by default", () => {
    const AndroidSystemSounds = loadModule("android");
    AndroidSystemSounds.beep();
    expect(mockNativeModule.playSystemSound).toHaveBeenCalledWith(
      AndroidSystemSounds.AndroidSoundIDs.TONE_PROP_BEEP
    );

    const iOSSystemSounds = loadModule("ios");
    iOSSystemSounds.beep();
    expect(mockNativeModule.playSystemSound).toHaveBeenCalledWith(
      iOSSystemSounds.iOSSoundIDs.Headset_AnswerCall
    );
  });
});
