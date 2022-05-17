[![Depfu](https://badges.depfu.com/badges/ceccee0a1b5a9569db79f167dcff365e/overview.svg)](https://depfu.com/github/alex-kim-dev/webpack-react-template?project_id=22178)
[![CI](https://github.com/alex-kim-dev/webpack-react-template/actions/workflows/ci.yml/badge.svg)](https://github.com/alex-kim-dev/webpack-react-template/actions/workflows/ci.yml)

# Webpack react template

## Features

- Webpack 5
  - html template
  - import aliases
  - imports images, fonts, css/sass (with modules support)
  - extracts and minifies styles for production build
  - copies files from `static` directory
  - generates source maps for production
  - includes bundle analyzer
- Typescript
- React
- React Testing Library, test utils
- Babel: react, typescript, env presets
- Eslint: airbnb config, prettier integration, import & props sorting
- Stylelint: standard config, prettier integration, css props sorting
- Editorconfig & Prettier
- Commitlint: conventional commits
- pre-commit hook for linting/testing/typechecking staged files
- CI on push & pr, in-progress workflow cancelling if a new one is queued, dependencies caching
- pinned versions of dependencies

## Usage

1. Click the `Use this template` button or clone locally:

   ```sh
   npx degit alex-kim-dev/webpack-react-template webpack-project
   ```

   Both methods will clean the git history.

   _[degit](https://github.com/Rich-Harris/degit)_

2. Update & install the dependencies:

   ```sh
   npx ncu -u && npm i
   ```

   _[npm-check-updates](https://github.com/raineorshine/npm-check-updates)_

3. Change the name, description, author, license, links in `package.json`.
4. Check out the available scripts in `package.json` or execute `npm run`.

### Import aliases

Includes only one alias: `~/` is mapped to `src/` dir. To add more, edit these:

- `path` in `tsconfig.json`
- `alias` in `webpack.config.js`
- `moduleNameMapper` in `jest.config.json` - order matters

### Importing SVG

```js
import Svg from './icon.svg'; // react component
import svg from './icon.svg?url'; // path to the file
import svg from './icon.svg?inline'; // data uri string
```
