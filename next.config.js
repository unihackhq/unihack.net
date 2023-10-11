const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  redirects: async () => {
    return [
      {
        source: '/join',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLScWRbp9lMacf0Xjul2y2kgLvgsTYqDo1BlrDWBkEAac0UrY0w/viewform',
        permanent: false,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/MfuzHurGpd',
        permanent: false,
      }
    ];
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/rules': { page: '/rules' },
      '/conduct': { page: '/conduct' },
      '/sponsorship': { page: '/sponsorship' },
      '/privacy': { page: '/privacy' },
      '/terms': { page: '/terms' },
      '/contact': { page: '/contact' }
    };
  },
};


module.exports = withMDX(nextConfig)
