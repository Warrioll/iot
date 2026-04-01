import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
  server: {
    port: 8080, // Port for development
  },
   preview: {
    port: 8080, // Port for the preview server (production)
  },
  resolve: {
    tsconfigPaths: true,
  },
});
