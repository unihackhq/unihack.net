import createMDX from '@next/mdx';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
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
      },
      {
        source: '/about',
        destination: '/',
        permanent: false,
      }
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
