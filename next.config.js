const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
  withSass({
    target: 'serverless',
    webpack: config => {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader'
      });
      return config;
    },
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/sponsorship': { page: '/sponsorship' },
        '/privacy': { page: '/privacy' },
        '/terms': { page: '/terms' }
      };
    }
  })
);
