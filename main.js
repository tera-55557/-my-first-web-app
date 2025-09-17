// ここからコードを書いてください
// main.js
// tabs.jsからsetupTabs関数をインポート
import { setupTabs } from './js/tabs.js';
// converter.jsからsetupConverter関数をインポート
import { setupConverter } from './js/converter.js';

document.addEventListener('DOMContentLoaded', () => {
  // ページが完全に読み込まれたらタブ機能をセットアップ
  setupTabs();
  // ページが完全に読み込まれたらコンバーター機能をセットアップ
  setupConverter();
});
