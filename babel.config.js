module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@dotenv',
        safe: false,
        allowUndefined: false,
      },
    ],
  ],
};
