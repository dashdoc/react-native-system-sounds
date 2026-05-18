class NativeModule {}

function requireNativeModule() {
  return global.__RN_SYSTEM_SOUNDS_NATIVE_MODULE__;
}

module.exports = {
  NativeModule,
  requireNativeModule,
};
