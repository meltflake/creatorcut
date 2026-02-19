// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://meltflake.github.io',
  base: '/creatorcut',
  output: 'static',
  vite: {
    ssr: {
      noExternal: ['@webtui/css', '@webtui/theme-catppuccin'],
    },
  },
});
