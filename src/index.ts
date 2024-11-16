import type * as Monaco from "monaco-editor";

/**
 * Register JSON5 language support for Monaco Editor
 *
 * @param monaco Monaco editor instance
 * @description
 * This function implements syntax highlighting for JSON5, including:
 * - Single-line and multi-line comments
 * - Strings (supports both single and double quotes)
 * - Numbers (hexadecimal, decimal, and scientific notation)
 * - Keyword constants (true, false, null, Infinity, NaN)
 * - Object and array punctuation
 */
export function registerJson5Language(monaco: typeof Monaco) {
  monaco.languages.register({ id: "json5" });

  monaco.languages.setMonarchTokensProvider("json5", {
    tokenizer: {
      root: [
        // 单行注释
        [/\/\/.*/, "comment.single.json5"],

        // 多行注释
        [/\/\*/, "comment.block.json5", "@comment"],

        // 字符串（单引号和双引号）
        [/'/, "string.quoted.json5", "@stringSingle"],
        [/"/, "string.quoted.json5", "@stringDouble"],

        // 数字
        [/0x[0-9a-fA-F]+/, "constant.hex.numeric.json5"], // 十六进制
        [/[+-]?(\d*\.\d+|\d+)([eE][+-]?\d+)?/, "constant.dec.numeric.json5"], // 小数和整数

        // 关键字常量
        [/\b(?:true|false|null|Infinity|NaN)\b/, "constant.language.json5"],

        // 对象和数组的标点符号
        [/[{}]/, "punctuation.definition.dictionary.json5"],
        [/\[\]/, "punctuation.definition.array.json5"],
        [/,/, "punctuation.separator.json5"],
      ],

      comment: [
        [/[^*]+/, "comment.block.json5"],
        [/\*\//, "comment.block.json5", "@pop"],
        [/\*/, "comment.block.json5"],
      ],

      stringSingle: [
        [/[^\\']+/, "string.quoted.json5"],
        [/\\./, "constant.character.escape.json5"],
        [/'/, "string.quoted.json5", "@pop"],
      ],

      stringDouble: [
        [/[^\\"]+/, "string.quoted.json5"],
        [/\\./, "constant.character.escape.json5"],
        [/"/, "string.quoted.json5", "@pop"],
      ],
    },
  });
}
