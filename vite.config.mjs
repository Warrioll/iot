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
    port: 3000, // Port for development
  },
   preview: {
    port: 3000, // Port for the preview server (production)
  },
  resolve: {
    tsconfigPaths: true,
  },
});
