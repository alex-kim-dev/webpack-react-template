# Webpack react template

## Features

- Webpack 5
  - html template
  - imports images, fonts
  - copies files from `static` directory
  - [fast refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
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
npm start       # start a dev server
npm run build   # production build, goes into dist folder
npm run lint    # fixes all fixable js problems
npm run format  # formats data files (json, yml, md)
```
