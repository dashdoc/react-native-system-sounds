module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^expo$': '<rootDir>/__mocks__/expo.js',
    '^expo-modules-core$': '<rootDir>/__mocks__/expo-modules-core.js',
    '^react-native$': '<rootDir>/__mocks__/react-native.js',
  },
  transformIgnorePatterns: [
    '/react-native-system-sounds/build/',
    '<rootDir>/../build/',
  ],
};
