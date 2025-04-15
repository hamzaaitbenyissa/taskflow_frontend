import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'prettier/prettier': ['error'],
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    name: 'Prettier config',
    rules: prettierConfig.rules,
  },
]

export default eslintConfig
