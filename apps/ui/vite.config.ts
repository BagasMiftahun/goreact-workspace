/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables
dotenv.config({ path: resolve(__dirname, '../.env') });

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/ui',
  server: {
    port: parseInt(process.env.VITE_PORT || '4200', 10),
    host: process.env.VITE_HOST || 'localhost',
  },
  preview: {
    port: parseInt(process.env.VITE_PREVIEW_PORT || '4300', 10),
    host: process.env.VITE_PREVIEW_HOST || 'localhost',
  },
  plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../dist/apps/ui',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
