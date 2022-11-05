const withPlugins = require('next-compose-plugins');
const path = require('path');
const { config } = require('process');
const redirects = async () => {
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
};

const webpack = async (config, options) => {
  console.log(config);

  const modifiedConfig = {
    ...config,
    resolve: {
      alias: {
        styles: path.join(__dirname, 'styles')
      }
    }
  }

  return config;
};

module.exports = {
  redirects,
  webpack,
  target: 'serverless',
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

// const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});

module.exports = withPlugins([
  [
    withMDX,
    {
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    },
  ]
]);
