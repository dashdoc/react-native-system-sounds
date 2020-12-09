package com.rnsystemsounds;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.media.ToneGenerator;
import android.media.AudioManager;

public class RNSystemSoundsModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    private ToneGenerator toneGenerator = new ToneGenerator(AudioManager.STREAM_SYSTEM, 100);

    public RNSystemSoundsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNSystemSounds";
    }

    @ReactMethod
    public void playSystemSound(int soundID) {
        toneGenerator.startTone(soundID);
    }

    @ReactMethod
    public void stopSystemSound() {
        toneGenerator.stopTone();
    }
}
