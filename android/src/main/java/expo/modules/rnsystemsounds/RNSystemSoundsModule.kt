package expo.modules.rnsystemsounds

import android.media.AudioManager
import android.media.ToneGenerator
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class RNSystemSoundsModule : Module() {
  private val toneGenerator = ToneGenerator(AudioManager.STREAM_SYSTEM, 100)

  override fun definition() = ModuleDefinition {
    Name("RNSystemSounds")

    Function("playSystemSound") { soundID: Int ->
      toneGenerator.startTone(soundID)
    }

    Function("stopSystemSound") {
      toneGenerator.stopTone()
    }

    OnDestroy {
      toneGenerator.release()
    }
  }
}
