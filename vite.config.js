import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        "$schema": "https://json.schemastore.org/web-manifest-combined.json",
        "name": "PracticeJSCode",
        "short_name": "PracticeJS",
        "start_url": ".",
        "id": ".",
        "display": "standalone",
        "background_color": "#fff",
        "description": "Markdown Viewer with REPL",
        "icons": [
          {
            "src": "/markdown.svg",
            "sizes": "48x48 72x72 96x96 144x144 168x168 192x192",
            "type": "image/svg+xml",
            "purpose": "any"
          }
        ],
        "orientation": "portrait"
      }
    })
  ]
})
