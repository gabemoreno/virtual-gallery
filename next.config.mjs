/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
        port: '',
        pathname: '**',
      },
    ],
  }, // dont forget the comma here
  pageExtensions: ['js', 'jsx', 'mdx'],
}

export default nextConfig
