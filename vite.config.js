import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Configuração para aplicação de demonstração (dev mode)
  if (mode === 'development' || process.env.BUILD_TARGET === 'demo') {
    return {
      plugins: [
        vue({
          template: { transformAssetUrls }
        }),
        WindiCSS(),
        quasar({
          sassVariables: 'src/quasar-variables.sass'
        })
      ],
    }
  }

  // Configuração para build de biblioteca
  return {
    plugins: [],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'SVGuid',
        fileName: (format) => `svguid.${format}.js`,
        formats: ['es', 'umd', 'cjs']
      },
      rollupOptions: {
        // Externaliza dependências que não devem ser incluídas no bundle
        external: [],
        output: {
          // Fornece variáveis globais para uso em builds UMD
          globals: {}
        }
      }
    }
  }
})
