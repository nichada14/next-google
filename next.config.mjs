/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'logolook.net',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
