# PWA-Vite-example
PWA example

## 前提

1. Viteを使用

## 用意するもの

1. 512x512 imageが必要となるが、freeなICONサイトからSVGを取得しておく
2. httpsが使えるサイト(デバッグまではlocalhostでも可能)

## PWA対応手順

1. [favicon generator](https://realfavicongenerator.net/)でSVGから各種アイコンを取得
2. index.htmlの修正. 上記1.で取得したHTMLコードのうち、`manifest`を含む行を除いたテキストを既存のHTMLのhead要素へ追加

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
```

3. vite-plugin-pwa

ViteのPWA用プラグインを導入する。

```shell
pnpm i vite-plugin-pwa -D
```

4. Vite用configファイルの修正

以下の`VitePWA`以降がPWAプラグインの設定(オプション)。`base`はGithub Pagesで公開するため。

```javascript
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
```

5. ICONを適切に配置

6. buildする

PWAプラグインは`manifest`ファイル、ワーカーコードを配置(デフォルトは`dist`フォルダ)。
