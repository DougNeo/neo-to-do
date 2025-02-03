import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/neo-to-do' : '',
      relative: false
    },
    alias: {
      $components: './src/components',
      $stores: './src/stores',
      $utils: './src/utils',
      $styles: './src/styles',
      $assets: './src/assets',
      $config: './src/config',
      $services: './src/services'
    }
  }
};
