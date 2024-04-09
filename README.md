# Opinionated ESLint and VSCode style guide

A shared set of standards and preferences, enforced through eslint and vscode. Priorities: minimalism, readability, documentation.

## Quickstart

To use:

1. `npm install -D airier @babel/eslint-parser @babel/preset-react eslint eslint-plugin-react husky`
1. Copy `.eslintrc.js` to your project's `.eslintrc.js`
1. Copy `.babelrc` to your project's `.babelrc`
1. Copy `.vscode/settings.json` to your project's `.vscode/settings.json`
1. Copy `.husky/pre-commit` to your project's `.husky/pre-commit`
1. Run husky initial setup

Lazy shell

```shell
npm install -D airier @babel/eslint-parser @babel/preset-react eslint eslint-plugin-react husky
mkdir .vscode .husky

# Download files
curl https://raw.githubusercontent.com/actuallymentor/airier/main/.eslintrc.js --output .eslintrc.js
curl https://raw.githubusercontent.com/actuallymentor/airier/main/.vscode/settings.json --output .vscode/settings.json
curl https://raw.githubusercontent.com/actuallymentor/airier/main/.husky/pre-commit --output .husky/pre-commit
curl https://raw.githubusercontent.com/actuallymentor/airier/main/.babelrc --output .babelrc
git add -f .eslintrc.js .babelrc .vscode/* .husky/*
chmod ug+x .husky/*
npm pkg set scripts.prepare="husky install"
npm pkg set scripts.lint="eslint --fix src"
npm run prepare
npx husky add .husky/pre-commit
git add .husky/pre-commit
```

## Making changes

The relevant source files are in `modules/`. If you make a change, you can update the package by:

1. Making the changes
1. Updating the version number in `package.json`
1. Pushing to the main branch of the repo or opening a pull request. Changes are deployed and published through github actions. Publishing requires a version bump in `package.json`.

### Using this repo as a template

If you are cloning this repo and want to reuse it to create an npm package. These are the one-time setup instructions:

1. You need to do the one-time first publishing manually by running `npm publish --access public` in the root of the project. This will create the package on npmjs and allow you to create a granular token.
1. You need to obtain a NPM_ACCESS_TOKEN on npmjs (https://www.npmjs.com/settings/YOURUSERNAME/tokens/granular-access-tokens/new). Note that granular tokens expire!
# airier
