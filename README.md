# @dashdoc/react-native-system-sounds

A module to play system sounds and beeps for React Native on iOS and Android (no sound files).

Heavily inspired by [react-native-a-beep](https://github.com/trietho/react-native-a-beep)  
Built with the [Expo Modules API](https://docs.expo.dev/modules/overview/)

## Installation

### Install with Expo Modules autolinking

1. Install package from npm

```sh
yarn add @dashdoc/react-native-system-sounds
```

2. Make sure Expo Modules are installed in your app. Expo apps already include them. In a bare React Native app, follow Expo's [installing Expo modules guide](https://docs.expo.dev/bare/installing-expo-modules/).

3. Install iOS Pods

```sh
cd ios && pod install && cd ..
```

## Usage

```js
import RNSystemSounds from '@dashdoc/react-native-system-sounds';

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

## License

[MIT](LISENCE)
