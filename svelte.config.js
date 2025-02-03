import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html' // Adicione esta linha para rotas dinâmicas
    }),
    paths: {
      // Ajuste para o nome do seu repositório GitHub
      base: process.env.NODE_ENV === 'production' ? '/neo-to-do' : '' 
    }
  }
};

export default config;
