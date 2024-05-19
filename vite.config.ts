import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '' }],
    }),
    tsconfigPaths(),
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
});
