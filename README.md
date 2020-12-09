# react-native-system-sounds

A module to play system sounds and beeps for React Native on iOS and Android (no sound files).

Heavily inspired by [react-native-a-beep](https://github.com/trietho/react-native-a-beep)  
Built with [react-native-module-init](https://github.com/brodybits/react-native-module-init)

## Installation

### Mostly automatic install with autolinking (RN > 0.60)

1. Install package from npm

```sh
yarn add react-native-system-sounds
```

2. Install iOS Pods

```sh
cd ios && pod install && cd ..
```

### Mostly automatic install with react-native link (RN < 0.60)

1. Install package from npm

```sh
yarn add react-native-system-sounds
```

2. Link package with react-native link

```sh
yarn react-native link react-native-system-sounds
```

3. Install iOS Pods

```sh
cd ios && pod install && cd ..
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

## Example

1. Clone the repository, enter the `example` directory and install dependencies.

```sh
git clone git@github.com:dashdoc/react-native-system-sounds.git
cd example/
yarn install
```

2. Install iOS Pods,

```sh
cd ios && pod install && cd ..
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
