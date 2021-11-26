const withPlugins = require('next-compose-plugins');
const redirects = async () => {
  return [
    {
      source: '/mentor',
      destination: 'https://forms.gle/qjkjeRPNzoa7PVbg8',
      permanent: false,
    },
    {
      source: '/mentor-info',
      destination:
        'https://www.notion.so/unihack/Mentor-Information-Pack-2021-a5473d95671147ba80ca93f5c5980558',
      permanent: false,
    },
    {
      source: '/mentor-brief',
      destination:
        'https://www.notion.so/unihack/Mentor-Information-Pack-2021-a5473d95671147ba80ca93f5c5980558',
      permanent: false,
    },
    {
      source: '/preregister',
      destination:
        'https://docs.google.com/forms/d/e/1FAIpQLScBvuU4VDabnj4AoBX7W-3JuGg1GiG1fJJqEnOLWBRX9FOCzQ/viewform?usp=sf_link',
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
