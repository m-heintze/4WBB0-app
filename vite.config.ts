import { defineConfig } from 'vite'
import { appendFile } from "fs";

const pwaCacheMapPath = "dist/pwa-cache-map.txt"
/**
 * Generates a file in dist/pwa-cache-map.txt with all files that should be cached by the PWA to make it work offline.
 * Vite removes all contents in the dist folder before building, thus this plugin does not have to clean dist/pwa-cache-map.txt.
 */
function generatePWACacheMap() {
  return {
    name: "pwa-cache-map",

    writeBundle(options: any, bundle: { [fileName: string]: any }) {
      for (const path of Object.keys(bundle)) {
        appendFile(pwaCacheMapPath, path + '\n', err => {
          if (!err) return;
          console.error("An error occured writing to: " + pwaCacheMapPath)
        })
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [generatePWACacheMap()],
  build: {
    rollupOptions: {
      input: {
        app: './index.html',
        'service-worker': './src/service-worker/service-worker.ts'
      },
      output: {
        entryFileNames: (assetInfo) => {
          if (assetInfo.name === 'service-worker') {
            return "[name].js"
          }

          return "assets/[name].[hash].js"
        },
      }
    }
  }
})
