import type { NextConfig } from 'next';

import { codeInspectorPlugin } from 'code-inspector-plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            },
        ],
    },
    webpack: (config) => {
        config.plugins.push(
            codeInspectorPlugin({ bundler: 'webpack', hideConsole: true, hideDomPathAttr: true }),
        );
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
