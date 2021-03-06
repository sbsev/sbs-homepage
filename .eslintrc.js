// These settings are used by a git pre-commit hook in src/utils/gitHooks
// which ensures eslint compliance before allowing commits.

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [`eslint:recommended`, `plugin:react/recommended`],
  parser: `babel-eslint`,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: `module`,
  },
  plugins: [`react`, `react-hooks`],
  rules: {
    indent: [`error`, 2, { SwitchCase: 1 }],
    quotes: [`error`, `backtick`, { avoidEscape: true }],
    semi: [`error`, `never`],
    'linebreak-style': [`error`, `unix`],
    'react/prop-types': `off`,
    'react/display-name': `off`,
    'no-console': [`error`, { allow: [`warn`, `error`] }],
    'react-hooks/rules-of-hooks': `error`,
    'react-hooks/exhaustive-deps': `warn`,
    'no-var': `error`,
    'spaced-comment': [`error`, `always`],
  },
  settings: {
    react: {
      version: `detect`,
    },
  },
}
