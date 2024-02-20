import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === 'serve') {
    return {
      test: {
      }
    }
  } else {
    // command === 'build'
    return {
      build: {
        outDir: 'dist',
        emptyOutDir: false,
        cssCodeSplit: false,
        manifest: false,
        sourcemap: false,
        lib: {
          entry: [resolve(__dirname, 'lib/index.ts')],
          name: 'reftch-ui',
          fileName: (format) => `reftch-ui.${format}.js`
        },
      },
    }
  }
})