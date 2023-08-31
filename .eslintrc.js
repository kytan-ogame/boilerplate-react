module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
  ],
  ignorePatterns: ['config/**', '**/*.css', '**/*.scss'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-plugin-no-inline-styles',
    'import',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-named-as-default': 'off',
    'no-console': 'error',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/prefer-query-selector': 'warn',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/no-null': 'off',
  },
  settings: {
    jest: {
      version: 'latest',
    },
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
