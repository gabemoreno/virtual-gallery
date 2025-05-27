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
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'uploads6.wikiart.org',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'd7hftxdivxxvm.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'www.art-prints-on-demand.com',
      },
      {
        protocol: 'https',
        hostname: 'warholfoundation.org',
      },
      {
        protocol: 'https',
        hostname: 'redwoodartgroup.com',
      },
      {
        protocol: 'https',
        hostname: 'images.masterworksfineart.com',
      },
    ],
  }, // dont forget the comma here
  pageExtensions: ['js', 'jsx', 'mdx'],
}

export default nextConfig
