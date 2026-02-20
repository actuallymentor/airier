#!/bin/bash

# Source nvm if available
nvm use 2>/dev/null || echo "nvm not found, proceeding with system Node.js"

# Install dependencies
npm install -D airier husky
mkdir .vscode .husky || echo "Directories already exist"

# Create scripts
npm pkg set scripts.lint="eslint --fix src"

# Init husky
npx husky init

# Download files (using new ESLint 9 flat config format)
curl https://raw.githubusercontent.com/actuallymentor/airier/main/eslint.config.example.js --output eslint.config.js
curl https://raw.githubusercontent.com/actuallymentor/airier/main/.vscode/settings.json --output .vscode/settings.json
curl https://raw.githubusercontent.com/actuallymentor/airier/main/.husky/pre-commit --output .husky/pre-commit
curl https://raw.githubusercontent.com/actuallymentor/airier/main/.babelrc --output .babelrc

# Ensure .gitignore ignores all dotfiles by default
grep -q '^\.\*$' .gitignore || echo -e "\n# Dotfiles\n.*" >> .gitignore

# Add files to git
git add -f eslint.config.js || true
git add -f .babelrc || true
git add -f .vscode/* || true
git add -f .husky/*

# Make husky executable
chmod ug+x .husky/*
git add -f .husky/pre-commit