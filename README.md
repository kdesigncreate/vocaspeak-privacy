# VocaSpeak Privacy Policy Website

VocaSpeakアプリのプライバシーポリシー専用Webサイトです。App Store Connect用のプライバシーポリシーURLとして使用されます。

## 技術構成

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Build Output**: Static Export

## 特徴

### 🎨 デザイン
- VocaSpeakのブランドカラー（青系）を使用
- レスポンシブデザイン（モバイル・デスクトップ対応）
- 清潔で読みやすいレイアウト
- 印刷にも最適化されたスタイル

### 🧭 ユーザビリティ
- 目次（Table of Contents）でナビゲーション
- スムーズスクロール機能
- アクティブセクションのハイライト表示
- 最終更新日の明記

### 🔍 SEO最適化
- 適切なメタタグ設定
- Open Graph対応
- Twitter Card対応
- 構造化データ対応
- 日本語検索に最適化

### ♿ アクセシビリティ
- セマンティックHTML構造
- フォーカス管理
- キーボードナビゲーション
- 高コントラストモード対応
- モーション設定の尊重

## プロジェクト構成

```
privacy-policy-site/
├── package.json              # 依存関係とスクリプト
├── next.config.js            # Next.js設定（静的エクスポート対応）
├── tailwind.config.js        # Tailwind CSS設定
├── postcss.config.js         # PostCSS設定
├── tsconfig.json             # TypeScript設定
├── app/
│   ├── layout.tsx           # レイアウトコンポーネント（メタデータ含む）
│   ├── page.tsx             # メインページ（プライバシーポリシー本文）
│   └── globals.css          # グローバルスタイル
└── README.md                # このファイル
```

## 開発・デプロイ

### 開発サーバーの起動
```bash
npm install
npm run dev
```

### 本番ビルド
```bash
npm run build
```

### Vercelへのデプロイ

1. Vercelアカウントにログイン
2. プロジェクトをGitリポジトリにプッシュ
3. Vercelで「New Project」から該当リポジトリを選択
4. 自動的にデプロイが開始されます

#### 設定値（Vercelの環境設定は不要）
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Install Command**: `npm install`

## 内容について

このプライバシーポリシーは2025年9月8日に制定されたVocaSpeakアプリのプライバシーポリシーに基づいています。

### 含まれる内容
1. はじめに
2. 収集する情報と利用目的
   - メールアドレス
   - ユーザー作成コンテンツ
   - 利用状況データ
3. 第三者への情報提供（Supabase連携）
4. データ管理とセキュリティ
5. ユーザーの権利
6. お問い合わせ先
7. プライバシーポリシーの変更

### お問い合わせ
k.designcreateform@gmail.com

## ライセンス

© 2025 VocaSpeak. All rights reserved.# vocaspeak-privacy
