module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          Assets: './src/Assets',
          Components: './src/Components',
          Context: './src/Context',
          Icons: './src/Icons',
          locales: './src/locales',
          Masks: './src/Masks',
          Navigation: './src/Navigation',
          Screens: './src/Screens',
          Schemas: './src/Schemas',
          Services: './src/Services',
          SvgIcons: './src/SvgIcons',
          Utils: './src/Utils',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
