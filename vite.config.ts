import { cloudflare } from '@cloudflare/vite-plugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    // Every page is static, so prerender them all at build time. crawlLinks follows the internal links from `/`.
    // autoSubfolderIndex: false writes /about.html, not /about/index.html. Cloudflare serves /about.html at /about,
    // but would 307-redirect /about to /about/ for a folder index.
    tanstackStart({ prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: false } }),
    viteReact(),
  ],
})
