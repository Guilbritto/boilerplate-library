const path = require("path");

module.exports = ({ config }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@svg": path.resolve(__dirname, "../src/assets/svg"),
    }
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
};