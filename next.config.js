/** @type {import('next').NextConfig} */
const nextConfig = {
    ignoreDuringBuilds: true,
    images: {
        domains: ['media.canva.com','www.canva.com','media-public.canva.com'],
        remotePatterns: [
            {
                'protocol': "https",
                'hostname': 'dealacres.com'
            }
        ]
    }
}

module.exports = nextConfig
