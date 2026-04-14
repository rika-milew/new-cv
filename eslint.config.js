import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default defineConfig([
  js.configs.recommended,
  eslintPluginUnicorn.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    linterOptions: {
      noInlineConfig: true,
    },
    rules: {
      // 🟡 Good practices
      'no-console': ['warn', { allow: ['info', 'error'] }],
      'no-magic-numbers': ['error', { ignore: [0, 1, 2, -1, 10, 100, 1000, 1000000] }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'max-lines-per-function': ['warn', { max: 40, skipBlankLines: true, skipComments: true }],
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            args: false,
            err: false,
            index: false,
            temp: false,
            params: false,
            props: false,
            ref: false,
            res: false,
          },
        },
      ],
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-top-level-await': 'error',

      // 🎨 Styles
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      curly: ['error', 'all'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false,
        },
      ],
      'arrow-parens': ['error', 'always'],
      'max-len': ['warn', { code: 120, ignoreComments: true }],

      // 🔧 Switched off
      'boundaries/element-types': 'off',
      'no-restricted-exports': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/number-literal-case': 'off',
      'unicorn/prefer-query-selector': 'off',
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      'max-lines-per-function': ['warn', { max: 80, skipBlankLines: true, skipComments: true }],
    },
  },
  {
    files: ['**/*.test.ts'],
    rules: {
      'max-lines-per-function': 'off',
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/*.d.ts',
      'eslint.config.js',
      'lint-staged.config.js',
    ],
  },
]);
