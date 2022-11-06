const withImages = require('next-images');
module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: 'https://api.github.com/users/RafaelCss/repos'
  }
};
module.exports = withImages({
  esModule: true
});
