import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '' }],
    }),
    tsconfigPaths(),
  ],
});
