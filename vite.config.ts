import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { minify } from 'terser'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

function minifyBundles() {
  return {
    name: 'minifyBundles',
    async generateBundle(options, bundle) {
      for (let key in bundle) {
        if (bundle[key].type == 'chunk' && key.endsWith('.js')) {
          const minifyCode = await minify(bundle[key].code, {
            sourceMap: true,
          })
          bundle[key].code = minifyCode.code
        }
      }
      return bundle
    },
  }
}

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === 'serve') {
    return {
      test: {},
    }
  } else {
    // command === 'build'
    return {
      resolve: {
        alias: {
          $ui: resolve(__dirname, './src/'),
        },
      },
      build: {
        outDir: './dist',
        emptyOutDir: true,
        cssCodeSplit: false,
        manifest: false,
        sourcemap: true,
        lib: {
          entry: [resolve(__dirname, 'src/index.ts')],
          name: 'reftch-ui',
          formats: ['es'],
          fileName: (format) => `index.${format}.js`,
        },
      },
      plugins: [libInjectCss(), minifyBundles()],
    }
  }
})
