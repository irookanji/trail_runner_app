module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:styled-components-a11y/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'styled-components-a11y'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    indent: 'off',
    'wrap-iife': 'off',
    'function-paren-newline': 'off',
    'react/function-component-definition': 'off',
    'import/no-anonymous-default-export': 'off',
    'operator-linebreak': 'off',
    'no-confusing-arrow': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'react/jsx-props-no-spreading': 'off',
    'max-len': 'off',
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-curly-newline': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'arrow-parens': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
  },
};
