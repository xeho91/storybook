import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
//@ts-ignore
export default defineConfig(({ mode }) => ({
  plugins: [svelte()],
  //@ts-ignore
  test: {
    environment: 'jsdom'
  },
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
  },
}))
