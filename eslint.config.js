import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default tseslint.config(
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', 'screenshots/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    /* Les scripts d'outillage tournent sous Node et écrivent volontairement sur stdout. */
    files: ['scripts/**/*.mjs'],
    rules: {
      'no-console': 'off',
      'no-undef': 'off',
    },
  },
);
