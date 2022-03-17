module.exports = {
  reactStrictMode: true,

  env: {
    BASE_URL: 'https://api.github.com/users/RafaelCss',
  },
}
const withImages = require("next-images");
module.exports = withImages({
  esModule: true,
});