const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const exclusionListModule = require('./node_modules/metro-config/src/defaults/exclusionList');
const exclusionList = exclusionListModule.default || exclusionListModule;

const packageRoot = path.resolve(__dirname, '..');
const appNodeModules = path.resolve(__dirname, 'node_modules');
const packageNodeModules = path.resolve(packageRoot, 'node_modules');

const escapePathForRegExp = filePath =>
  filePath.replace(/[/\\^$*+?.()|[\]{}]/g, '\\$&');
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: [packageRoot],
  resolver: {
    blockList: exclusionList([
      new RegExp(`${escapePathForRegExp(packageNodeModules)}\\/.*`),
    ]),
    disableHierarchicalLookup: true,
    extraNodeModules: {
      '@babel/runtime': path.resolve(appNodeModules, '@babel/runtime'),
      expo: path.resolve(appNodeModules, 'expo'),
      'expo-modules-core': path.resolve(appNodeModules, 'expo-modules-core'),
      react: path.resolve(appNodeModules, 'react'),
      'react-native': path.resolve(appNodeModules, 'react-native'),
      'react-native-system-sounds': packageRoot,
    },
    nodeModulesPaths: [appNodeModules],
  },
};
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
