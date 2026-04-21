# 文章知識庫：明心櫞 Notes（Quartz）

## 背景

此 repo（`shirleycounpsy/notes`）係 Quartz 靜態網站，部署於 `https://shirleycounpsy.github.io/notes/`，係主頁（`shirleycounpsy.github.io`）的文章知識庫部分。兩個 repo 係獨立的，但設計上要協調一致。

## 重要檔案

```
quartz/
├── quartz.config.ts        ← 網站設定（字款、顏色、baseUrl）
├── quartz.layout.ts        ← 頁面版面（左欄、右欄、頁尾等）
├── quartz/styles/
│   └── custom.scss         ← 所有自訂 CSS（唯一要改 CSS 的地方）
├── content/                ← 所有文章（Markdown）
│   ├── index.md            ← 知識庫首頁
│   ├── About.md
│   ├── 文章/               ← 文章分類資料夾
│   └── 著作/
└── CLAUDE.md
```

## 設計方向（與主頁一致）

**色調：** 粉霧燕麥系

| 角色 | Hex |
|---|---|
| 頁面底色 | `#FDFAF8` |
| 主粉 | `#fce1de` |
| 粉邊／分隔線 | `#E4D4C8` |
| CTA／重點色 | `#C49898` |
| hover | `#B48888` |
| 主文字 | `#2D2220` |
| 次要文字 | `#7A6858` |

**字款（已在 quartz.config.ts 設定）：**
- `title`: Kaisei Decol — 網站品牌名
- `header`: Noto Serif TC（Light 300）— 章節標題
- `body`: Klee One — 內文

**語言：** 繁體中文（香港書面語），唔係廣東話口語，唔係簡體中文

## CSS 修改規則

- 所有自訂 CSS 只寫喺 `quartz/styles/custom.scss`
- `@use "./base.scss"` 必須係第一行，唔可以喺佢之後加 `@import`
- 如需載入 Google Font，加落 `quartz.config.ts` 的 `typography` 欄位，唔係用 `@import`
- 顏色變數透過 `:root[saved-theme="light"]` 同 `:root[saved-theme="dark"]` 設定

## 版面設定（quartz.layout.ts）

- 左欄：PageTitle、Search、Darkmode、ReaderMode、Explorer（目錄）
- 右欄：TableOfContents（desktop only）、Backlinks
- 頁尾：Instagram 連結

## Deploy 流程

```bash
# 喺 /Users/shirley/quartz 入面工作
cd /Users/shirley/quartz

# 本地預覽
npx quartz build --serve

# 改完之後 push（會自動觸發 GitHub Actions deploy）
git add .
git commit -m "描述改動"
git push origin v4   # ← 注意係 v4 唔係 main
```

- GitHub Actions workflow 監聽 `v4` branch
- Deploy 去 `gh-pages` branch
- GitHub Pages source 設定係 "Deploy from a branch" → `gh-pages`

## 與主頁的協調重點

- 主頁位於 `https://shirleycounpsy.github.io`（另一個 repo）
- 所有返回主頁的連結用 `https://shirleycounpsy.github.io`
- 色調、字款與主頁保持一致（見上方設計方向）
- 唔加聯絡表單或預約功能
