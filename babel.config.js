module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.ios.jsx',
          '.android.js',
          '.android.jsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@screens': './src/screens/hej',
          '@store': './src/store',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
