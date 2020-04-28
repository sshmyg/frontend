module.exports = ({ file }) => ({
  parser: file.extname === '.ss' ? 'sugarss' : false,
  plugins: {
    autoprefixer: {},
    'postcss-preset-env': {},
    'postcss-nested': {},
  },
});
