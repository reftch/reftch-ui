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
      resolve: {
        alias: {
          $lib: resolve(__dirname, './src/lib'),
        },
      },
      build: {
        outDir: 'dist',
        emptyOutDir: false,
        cssCodeSplit: false,
        manifest: false,
        sourcemap: false,
        lib: {
          entry: [resolve(__dirname, 'src/index.ts')],
          name: 'reftch-ui',
          fileName: (format) => `reftch-ui.${format}.js`
        },
      },
    }
  }
})