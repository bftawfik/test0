module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    semi: ["error", "always"],
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "prettier/prettier": ["error"],
  },
};
