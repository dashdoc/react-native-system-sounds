/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

jest.mock("react-native-system-sounds", () => ({
  __esModule: true,
  default: {
    AndroidSoundIDs: {TONE_CDMA_ABBR_ALERT: 97},
    iOSSoundIDs: {AudioToneBusy: 1070},
    Beeps: {Negative: 25},
    beep: jest.fn(),
    play: jest.fn(),
  },
}));

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

it('renders correctly', () => {
  act(() => {
    renderer.create(<App />);
  });
});
