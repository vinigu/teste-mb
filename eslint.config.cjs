// eslint-disable-next-line @typescript-eslint/no-require-imports
const next = require("eslint-plugin-next");

module.exports = [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    plugins: {
      next,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:next/core-web-vitals",
    ],
    ignores: [
      "**/dist",
      "**/*.scss",
      "**/*.css",
      "**/node_modules",
      "**/build",
      "vite.config.ts",
      "jest.setup.ts",
      "jest.config.js",
      "**/test/__mocks__/fileMock.js",
      "commitlint.config.js",
      "**/mock/",
    ],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off", // Desabilitando a regra de expressões não utilizadas
    },
  },
];
