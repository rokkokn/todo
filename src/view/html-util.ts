export function escapeSpecialChars(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * HTML文字列からHTML要素を作成して返す
 * @param {string} html
 */

export function htmltoElement(html: string): Element {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstElementChild;
}

/**
 * HTML文字列からDOM Nodeを作成して返すタグ関数
 * @return {Element}
 */

export function element(
  strings: TemplateStringsArray,
  ...values: any[]
): Element {
  const htmlString = strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else if (typeof value === "object") {
      return result + (value as Element).outerHTML + str;
    } else {
      return result + String(value) + str;
    }
  });
  return htmltoElement(htmlString);
}

/**
 * コンテナ要素の中身をbodyElementで上書きする
 * @param {Element} bodyElement コンテナ要素の中身となる要素
 * @param {Element} containerElement コンテナ要素
 */

export function render(bodyElement: Element, containerElement: Element) {
  // containerElementの中身を空にする
  containerElement.innerHTML = "";
  // containerElementの直下にbodyElementを追加する
  containerElement.appendChild(bodyElement);
}
