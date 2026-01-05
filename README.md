# Opinionated ESLint and VSCode style guide

A shared set of standards and preferences, enforced through eslint and vscode. Priorities: minimalism, readability, documentation.

**Now updated for ESLint 9.x with flat config format and ESM support!**

## Quickstart

```shell
# Install dependencies
npm install -D airier husky
mkdir .vscode .husky || echo "Directories already exist"

# Create scripts
npm pkg set scripts.lint="eslint --fix src"

# Init husky
npx husky init

# Download files (using new ESLint 9 flat config format)
curl https://raw.githubusercontent.com/actuallymentor/airier/main/eslint.config.js --output eslint.config.js
curl https://raw.githubusercontent.com/actuallymentor/airier/main/.vscode/settings.json --output .vscode/settings.json
curl https://raw.githubusercontent.com/actuallymentor/airier/main/.husky/pre-commit --output .husky/pre-commit
curl https://raw.githubusercontent.com/actuallymentor/airier/main/.babelrc --output .babelrc
curl https://raw.githubusercontent.com/actuallymentor/airier/main/AGENTS.md --output AGENTS.md

# Ensure .gitignore ignores all dotfiles by default
grep -q '^\.\*$' .gitignore || echo -e "\n# Dotfiles\n.*" >> .gitignore

# Add files to git
git add -f eslint.config.js .babelrc AGENTS.md .vscode/* .husky/*

# Make husky executable
chmod ug+x .husky/*
git add -f .husky/pre-commit
```

## ESLint 9 Migration

This package now uses ESLint 9.x with the new **flat config format** and **ESM-only**. If you're upgrading from an older version:

1. Remove your old `.eslintrc.*` files (they're no longer supported in ESLint 9)
2. Use `eslint.config.js` instead
3. Update your ESLint to version 9.39.2 or later
4. Ensure your project supports ESM (Node.js 20+)

### Usage

```javascript
// eslint.config.js
import { eslint_config } from 'airier'

export default eslint_config
```

## AI Assistant Instructions

This package includes an `AGENTS.md` file that instructs AI coding assistants (like Claude, GPT, Copilot) to follow the same minimalist, "airy" code style that the ESLint rules enforce.

When working with AI assistants, share this file with them to ensure they write code matching your style:
- No semicolons
- Spacing in brackets: `[ 1, 2, 3 ]`, `{ key: value }`, `func( args )`
- 4-space indentation
- Minimalist, Ruby-like aesthetics
- Modern ES modules only

The AI instructions complement the automated linting by teaching assistants *why* the code should look this way, not just enforcing it after the fact.

## Making changes

The relevant source files are in `modules/`. If you make a change, you can update the package by:

1. Making the changes
1. Updating the version number in `package.json`
1. Pushing to the main branch of the repo or opening a pull request. Changes are deployed and published through github actions. Publishing requires a version bump in `package.json`.

### Using this repo as a template

If you are cloning this repo and want to reuse it to create an npm package. These are the one-time setup instructions:

1. You need to do the one-time first publishing manually by running `npm publish --access public` in the root of the project. This will create the package on npmjs and allow you to create a granular token. This requires you to rename `.npmrc` to `.npmrc.bak` temporatily.
1. You need to obtain a NPM_ACCESS_TOKEN on npmjs (https://www.npmjs.com/settings/YOURUSERNAME/tokens/granular-access-tokens/new). Note that granular tokens expire!
