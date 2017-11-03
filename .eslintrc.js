module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    "ecmaFeatures": {
      "jsx": true
    },
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: [
    "prettier",
    "react"
  ],
  rules: {
    "prettier/prettier": ["error", {
      trailingComma: "es5",
      semi: false,
    }],
    semi: [0, 'never']
  },
};
