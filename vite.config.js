import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import esbuild from 'esbuild';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
});