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

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
};
