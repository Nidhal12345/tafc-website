/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict mode for better development practices
  reactStrictMode: true,

  // Optimize images for production
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
  },

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Production optimizations
  compress: true,
  poweredByHeader: false,

  // TypeScript strict mode (disable for now if issues exist)
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint during builds
  eslint: {
    ignoreDuringBuilds: true, // Enable once linting is set up
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
      {
        source: '/(.*).(jpg|jpeg|png|gif|ico|svg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
