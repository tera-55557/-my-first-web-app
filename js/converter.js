// ここからコードを書いてください

// js/converter.js
export function setupConverter() {
  // ① 単位変換に必要なHTML要素を取得するのじゃ
  const converterForm = document.querySelector('.converter-form'); // フォーム全体
  const inputValue = document.querySelector('.converter-input'); // 入力値
  const fromUnit = document.querySelector('.converter-from'); // 変換元の単位選択
  const toUnit = document.querySelector('.converter-to'); // 変換先の単位選択
  const result = document.querySelector('.converter-result'); // 結果表示

  // ② 変換に使う単位のデータを定義するのじゃ
  // 各単位をメートルを基準とした値で定義しておくぞ
  const lengthUnit = [
    { name: 'meter', base: 1 },
    { name: 'kilometer', base: 1000 },
    { name: 'centimeter', base: 0.01 },
    { name: 'millimeter', base: 0.001 },
    { name: 'inch', base: 0.0254 },
    { name: 'foot', base: 0.3048 },
    { name: 'yard', base: 0.9144 },
    { name: 'mile', base: 1609.344 },
  ];

  // ③ ドロップダウンリストを初期化するのじゃ
  // これから動的に選択肢を追加するので、一度中身を空にしておくぞ
  fromUnit.innerHTML = '';
  toUnit.innerHTML = '';

  // ④ 定義した単位データを使って、ドロップダウンリストの選択肢を生成するのじゃ
  for (const unit of lengthUnit) {
    fromUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
    toUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
  }

  // ⑤ ドロップダウンリストに初期値を選択させるのじゃ
  // 例えば、Fromを最初の単位（meter）、Toを二番目の単位（kilometer）に設定するぞ
  if (fromUnit.options.length > 0) {
    fromUnit.selectedIndex = 0; // meter
  }
  if (toUnit.options.length > 0) {
    toUnit.selectedIndex = 1; // kilometer
  }

  // ⑥ 変換を実行する関数を定義するのじゃ
  function convert() {
    // 入力値を取得し、数値に変換するぞ
    const value = parseFloat(inputValue.value);

    // もし入力値が有効な数値でなければ、エラーメッセージを表示して処理を終えるのじゃ
    if (isNaN(value)) {
      result.textContent = 'Please enter a valid number';
      return;
    }

    // 変換元の単位の基準値と、変換先の単位の基準値を取得するのじゃ
    const fromBase = parseFloat(fromUnit.value); // <option>のvalue属性に設定した基準値
    const toBase = parseFloat(toUnit.value); // <option>のvalue属性に設定した基準値

    // 変換計算を行うぞ
    // (入力値 × 変換元の基準値) を 変換先の基準値で割ることで、目的の単位に変換できるのじゃ
    const converted = (value * fromBase) / toBase;

    // 変換結果をHTMLに表示するのじゃ
    // 結果は小数点以下3桁まで表示するようにするぞ
    // どの単位からどの単位へ変換したか分かりやすく表示するのじゃ
    result.textContent = `${value} ${
      lengthUnit[fromUnit.selectedIndex].name
    } = ${converted.toFixed(3)} ${lengthUnit[toUnit.selectedIndex].name}`;
  }
  // ⑦ フォームの入力値や選択肢が変更されたときに、変換を実行するようイベントリスナーを設定するのじゃ
  converterForm.addEventListener('input', convert); // <-- この行はここに来るのじゃ！

  // ⑧ ページが読み込まれたときに、一度初期値で変換を実行するのじゃ
  convert(); // <-- この行もここに来るのじゃ！
} // <-- setupConverter 関数の閉じ括弧じゃ

// setupConverter 関数の閉じ括弧
