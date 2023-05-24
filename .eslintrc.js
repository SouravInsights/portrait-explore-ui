module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['import'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'prettier/prettier': 'error',

    // Suppress errors for missing 'import React' in files, not needed with Next.js
    'react/react-in-jsx-scope': 'off',

    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // strict core-web-vitals
    '@next/next/no-sync-scripts': 2,
    '@next/next/no-html-link-for-pages': 2,

    // override airbnb
    semi: ['error', 'never'],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 2,
        when: 'multiline'
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'comma-dangle': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e' // for e.returnvalue
        ],
        ignorePropertyModificationsForRegex: ['^draft']
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'no-console': 'off'
      }
    }
  ]
}
