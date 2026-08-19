import type { NextConfig } from 'next'

/**
 * Velite compiles `content/**` into `.velite/*.json` before Next reads it.
 * Running it from the config (rather than as a separate npm script) keeps
 * `next dev` watching content files, so MDX edits hot-reload like source.
 *
 * This is an async config function rather than a top-level await: Next loads
 * `next.config.ts` through `require()`, which rejects a module graph with TLA.
 */
export default async function config(): Promise<NextConfig> {
  const isDev = process.argv.includes('dev')
  const isBuild = process.argv.includes('build')

  if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = '1'
    const { build } = await import('velite')
    await build({ watch: isDev, clean: !isDev })
  }

  return {
    // Fully static output. The site has no database and no per-request work, so
    // every route is prerendered to HTML and served straight off a CDN. It is
    // also what lets Pagefind index the real `out/` HTML after the build.
    output: 'export',
    trailingSlash: true,
    images: {
      // Static export cannot use the on-demand optimiser. Velite pre-processes
      // content images (dimensions + blurDataURL) at build time instead.
      unoptimized: true,
    },
    // Off by design: almost every internal href on this site is derived from
    // content at build time, so typed routes would mean casting at every call
    // site without catching a real class of bug.
    typedRoutes: false,
    experimental: {
      // Keeps the client bundle small as the component surface grows.
      optimizePackageImports: ['clsx', 'tailwind-merge'],
    },
  }
}
