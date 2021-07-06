module.exports = {
  plugins: ["jest"],
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "plugin:jest/recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ["temp.js", "**/*.config.js"],
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    quotes: ["error", "double"],
  },
};
