# monaco-json5-highlighter

**monaco-json5-highlighter** is a lightweight library for Monaco Editor designed to register and provide syntax highlighting for JSON5. With this library, developers can easily register the JSON5 language in Monaco Editor and enable syntax highlighting to enhance code readability and editing experience.

![Screenshot of JSON5 syntax highlighting](https://github.com/user-attachments/assets/0d4b77df-60f8-41c0-8bf6-ba69d3808a73)

## Installation

```bash
npm install monaco-json5-highlighter
pnpm install monaco-json5-highlighter
yarn add monaco-json5-highlighter
```

## Usage

1. Import the library and register the JSON5 language
```javascript
import * as monaco from "monaco-editor";
import { registerJson5Language } from "monaco-json5-highlighter";

// Register the JSON5 language and apply syntax highlighting
registerJson5Language(monaco);
```

2. Create an editor instance with language set to `json5`
```javascript
monaco.editor.create(..., {
  value: "// Your JSON5 content here",
  language: "json5",
  ...
});
```