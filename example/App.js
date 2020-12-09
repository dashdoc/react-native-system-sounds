import * as React from "react";
import {StyleSheet, View, Button, Platform} from "react-native";
import RNSystemSounds from "react-native-system-sounds";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          console.log("HERE");
          RNSystemSounds.beep();
        }}
        title="Play positive beep"
      />
      <Button
        onPress={() => RNSystemSounds.beep(RNSystemSounds.Beeps.Negative)}
        title="Play negative beep"
      />
      <Button
        onPress={() =>
          RNSystemSounds.play(
            Platform.select({
              android: RNSystemSounds.AndroidSoundIDs.TONE_CDMA_ABBR_ALERT,
              ios: RNSystemSounds.iOSSoundIDs.AudioToneBusy,
            })
          )
        }
        title="Play custom system sound"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
