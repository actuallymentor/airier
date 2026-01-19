// Import required modules
import eslint from '@eslint/js'
import react from 'eslint-plugin-react'
import unusedImports from 'eslint-plugin-unused-imports'
import babelParser from '@babel/eslint-parser'
import globals from 'globals'

// Import the styleguide module
import styleguide from './styleguide.js'

// Export the flat config as an array
export default [
    // Global ignores for build output and dependencies
    {
        ignores: [
            '**/dist/**',
            '**/build/**',
            '**/node_modules/**',
            '**/.next/**',
            '**/coverage/**'
        ]
    },
    // Apply to all JavaScript and JSX files
    {
        files: [ '**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs' ],

        languageOptions: {
            parser: babelParser,
            parserOptions: {
                ecmaVersion: 2020,
                requireConfigFile: false,
                babelOptions: {
                    presets: [ '@babel/preset-react' ]
                },
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.mocha,
                ...globals.cypress
            }
        },

        plugins: {
            react,
            'unused-imports': unusedImports
        },

        settings: {
            react: {
                version: '19'
            }
        },

        rules: {
            // ESLint recommended rules
            ...eslint.configs.recommended.rules,

            // React recommended rules
            ...react.configs.recommended.rules,

            // Custom styleguide rules
            ...styleguide
        }
    }
]
