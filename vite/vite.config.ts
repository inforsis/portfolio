import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['src'],
      },
    },
  },
  server: {
    port: 5173,
    strictPort: false,
    watch: {
      usePolling: true,
    },
  },
  preview: {
    port: 4173,
    strictPort: false,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
});
