const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
  withSass({
    target: 'serverless',
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
