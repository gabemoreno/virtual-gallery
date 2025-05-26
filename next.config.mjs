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
      {
        protocol: 'https',
        hostname: 'i.natgeofe.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'smarthistory.org',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.singulart.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'hirshhorn.si.edu',
        pathname: '**',
      },
    ],
  }, // dont forget the comma here
  pageExtensions: ['js', 'jsx', 'mdx'],
}

export default nextConfig
