// ここからコードを書いてください
// js/tabs.js
export function setupTabs() {
  // ① ホームリンクとコンバータータブの要素を取得するのじゃ
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');

  // ② ホームセクションとコンバーターセクションの要素を取得するのじゃ
  const homeSection = document.getElementById('home');
  const converterSection = document.getElementById('converter');

  // ③ ホームリンクがクリックされたときの処理を記述するぞ
  homeLink.addEventListener('click', () => {
    // コンバーターセクションに hidden クラスを追加して非表示にするのじゃ
    converterSection.classList.add('hidden');
    // ホームセクションから hidden クラスを削除して表示するのじゃ
    homeSection.classList.remove('hidden');
  });

  // ④ コンバータータブがクリックされたときの処理を記述するぞ
  converterTab.addEventListener('click', () => {
    // ホームセクションに hidden クラスを追加して非表示にするのじゃ
    homeSection.classList.add('hidden');
    // コンバーターセクションから hidden クラスを削除して表示するのじゃ
    converterSection.classList.remove('hidden');
  });
}
