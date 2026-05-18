const React = require("react");

const Platform = {
  get OS() {
    return global.__RN_SYSTEM_SOUNDS_PLATFORM__ || "ios";
  },
  select(options) {
    return options[Platform.OS];
  },
};

module.exports = {
  Button: props => React.createElement("Button", props),
  Platform,
  StyleSheet: {
    create: styles => styles,
  },
  View: props => React.createElement("View", props),
};
