module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["xo", "prettier"],
  overrides: [
    {
      rules: {
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/consistent-indexed-object-style": "off",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/ban-types": "off",
      },
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
    },
    {
      files: ["src/hooks/useUser/useUser.test.ts"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-return": "off",
      },
    },
    {
      files: ["src/store/contexts/CachedRequestsProvider.tsx"],
      rules: {
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "no-negated-condition": "off",
        "no-prototype-builtins": "off",
        "no-async-promise-executor": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
