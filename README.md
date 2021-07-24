[![Depfu](https://badges.depfu.com/badges/ceccee0a1b5a9569db79f167dcff365e/overview.svg)](https://depfu.com/github/Alex-K1m/webpack-react-template?project_id=22178)

# Webpack react template

## Features

- Webpack 5
  - html template
  - imports images, fonts, css
    - SVG can be imported as
      - react component `image.svg`
      - path to a file `image.svg?file`
      - data uri string `image.svg?inline`
  - extracts and minifies css for production build
  - copies files from `static` directory
  - uses [react fast refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
  - bundles libraries and webpack runtime into separate chunks
  - generates source maps for production
  - includes bundle analyzer
- React
  - [new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) (no need to import react for using jsx)
- Babel
  - preset env
  - preset react
  - class properties
- Eslint
  - preset airbnb
  - intergration with Prettier
  - plugins: import, jsx-a11y, hooks, import sort
- Prettier

## Usage

Click on the `Use this template` green button at the top - this will make a new github repo with clean commit history. Then clone it and install dependencies:

```sh
npm i
```

Available npm scripts:

```sh
npm start              # start a dev server
npm run build          # production build, goes into dist folder
npm run serve          # starts simple http server for production build
npm run lint           # runs eslint without fixing
npm run lint:fix       # fixes all fixable js issues
npm run format         # checks formatting without fixing
npm run format:fix     # formats data files (json, yml, md)
npm run analyze        # helps to inspect the bundle content
npm run update-caniuse # updates caniuse database
```
