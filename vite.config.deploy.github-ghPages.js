import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
    base: "/PWA-Vite-example",
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                "$schema": "https://json.schemastore.org/web-manifest-combined.json",
                "name": "PracticeJSCode",
                "short_name": "PracticeJS",
                "start_url": ".",
                "id" : ".",
                "display": "standalone",
                "background_color": "#fff",
                "description": "Markdown Viewer with REPL",
                "icons": [
                    {
                        "src": "./assets/markdown.svg", // 相対URLの場合は、manifestが基準URL
                        "sizes": "48x48 72x72 96x96 144x144 168x168 192x192",
                        "type": "image/svg+xml",
                        "purpose": "any" // ユーザエージェントはどのような場合でも自由にアイコンを表示することができます(既定値)
                    }
                ],
                "orientation": "portrait"
            }
        })
    ]
})
