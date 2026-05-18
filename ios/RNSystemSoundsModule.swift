import AudioToolbox
import ExpoModulesCore

public final class RNSystemSoundsModule: Module {
  public func definition() -> ModuleDefinition {
    Name("RNSystemSounds")

    Function("playSystemSound") { (soundID: Int) in
      AudioServicesPlaySystemSound(SystemSoundID(soundID))
    }
  }
}
