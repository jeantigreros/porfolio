// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',

  experimental: {
    serverIslands: true,
    env: {
        schema: {
            API_ENDPOINT: envField.string({
                access: 'public',
                context: 'server',

            })
        }
      }
  },

  adapter: vercel()
});