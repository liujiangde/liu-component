import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  resolve:{
    docDirs: [{ type: 'doc', dir: 'docs' }],
    // atomDirs: [{ type: 'component', dir: 'components' }],
  },

  alias: {
    '@dumi2/liu': path.join(__dirname, 'components'),
  },
  themeConfig: {
    name: '@dumi2/liu',
  },
});
