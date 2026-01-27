import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      atom: '/src/atom',
      components: '/src/components',
      constants: '/src/constants',
      features: '/src/features',
      sections: '/src/sections',
      styles: '/src/styles',
      utils: '/src/utils',
      assets: '/src/assets',
    },
  },
  server: {
    port: 3000,
  },
});
