// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo', 'module:react-native-dotenv'],
//     plugins: ['react-native-reanimated/plugin'],
//   };
// };

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:react-native-dotenv'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@src': './src',
            '@res': './res',
          },
        },
      ],
    ],
  };
};