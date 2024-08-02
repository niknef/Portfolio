
import { defineConfig } from 'astro/config';
// Also can be @astrojs/vercel/static
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
 
export default defineConfig({
  // Also can be 'static' or 'hybrid'
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
});