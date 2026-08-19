import type { NextConfig } from 'next'

/**
 * Velite compiles `content/**` into `.velite/*.json` before Next reads it.
 * Running it here (rather than as a separate npm script) keeps `next dev`
 * watching content files, so edits to MDX hot-reload like source changes.
 */
const isDev = process.argv.includes('dev')
const isBuild = process.argv.includes('build')
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  const { build } = await import('velite')
  await build({ watch: isDev, clean: !isDev })
}

const nextConfig: NextConfig = {
  // Fully static output. The site has no database and no per-request work, so
  // every route is prerendered to HTML and served straight off a CDN. This is
  // also what lets Pagefind index the real `out/` HTML after the build.
  output: 'export',
  trailingSlash: true,
  images: {
    // Static export cannot use the on-demand optimiser. Velite pre-processes
    // content images (dimensions + blurDataURL) at build time instead.
    unoptimized: true,
  },
  typedRoutes: true,
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  experimental: {
    // Keeps the client bundle small as the component surface grows.
    optimizePackageImports: ['clsx', 'tailwind-merge'],
  },
}

export default nextConfig
