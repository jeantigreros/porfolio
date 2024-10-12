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
            PUBLIC_ENDPOINT: envField.string({
                context: 'server',
                access: 'public'
            })
        }
      }
  },

  adapter: vercel()
});
