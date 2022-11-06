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
  images: {
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    disableStaticImages: false,
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false
  }
};
