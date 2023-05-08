const {getDefaultConfig} = require('metro-config');

module.exports = async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: [
        ...assetExts.filter(ext => ext !== 'svg'), // Remove the 'svg' extension from the default asset extensions
        'png',
        'jpg', // Add support for PNG and JPG files
      ],
      sourceExts: [...sourceExts, 'svg'], // Add support for SVG files
    },
  };
};
