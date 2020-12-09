# react-native-system-sounds

A module to play system sounds and beeps for react-native apps (no sound files).

Heavily inspired by [react-native-a-beep](https://github.com/trietho/react-native-a-beep)  
Built with [react-native-module-init](https://github.com/brodybits/react-native-module-init)

## Installation

```sh
yarn add react-native-system-sounds
```

### iOS

```sh
cd ios && pod install
```

## Usage

```js
import RNSystemSounds from 'react-native-system-sounds';

// ...

<Button
  title="Play positive beep"
  onPress={() => RNSystemSounds.beep()}
/>

<Button
  title="Play negative beep"
  onPress={() => RNSystemSounds.beep(RNSystemSounds.Beeps.Negative)}
/>

<Button
  title="Play custom system sound"
  onPress={() =>
    RNSystemSounds.play(
      Platform.select({
        android: RNSystemSounds.AndroidSoundIDs.TONE_CDMA_ABBR_ALERT,
        ios: RNSystemSounds.iOSSoundIDs.AudioToneBusy,
      })
    )
  }     
/>
```

## Examples

1. Clone the repository, enter the `example` directory and install dependencies.

```sh
git clone git@github.com:dashdoc/react-native-system-sounds.git
cd example/
yarn install
```

2. Install iOs Pods,

```sh
cd ios/
pod install
cd ..
```

3. Start bundler.

```sh
yarn start
```

4. On a new terminal, run the app on the `<platform>` of your choice (`ios` or `android`).

```sh
cd example/
yarn <platform>
```

## Caveats

This does not work on iOS simulator.

## License

[MIT](LISENCE)
