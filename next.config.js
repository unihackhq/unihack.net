const withSass = require('@zeit/next-sass');

module.exports = withSass({
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
});
