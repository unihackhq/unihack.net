import createMDX from '@next/mdx';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@/styles': './src/styles'
    }
  },
  experimental: {
    turbopackFileSystemCacheForDev: false
  },
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
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ['remark-frontmatter', 'remark-mdx-frontmatter'],
  }
});

export default withMDX(nextConfig);
