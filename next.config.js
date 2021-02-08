module.exports = {
  async redirects() {
    return [
      {
        source: '/mentor',
        destination: 'https://forms.gle/qjkjeRPNzoa7PVbg8',
        permanent: false
      },
      {
        source: '/mentor-info',
        destination: 'https://www.notion.so/unihack/Mentor-Information-Pack-2021-a5473d95671147ba80ca93f5c5980558',
        permanent: false
      }
    ]
  },

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
};
