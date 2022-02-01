# React course: react4teachers-zero2hero
Teaching boilerplate for teachers that are learning how to program with React. 

Course offered by Conselleria d'Educació de les Illes Balears. 2022

Training perform by Alberto Soto Fernandez


## Content : Stage 1 - Intro to vanillaJS

### Starting the project
We will set up a project based on vanillaJs, using webpack 5 as a base to stablish our knowledge

To achieve it, perform the following steps:

```bash
yarn init --private
yarn add webpack webpack-cli webpack-dev-server --dev
touch webpack.config.js
mkdir src
mkdir dist
touch src/index.js
```

Inside the webpack.config.js insert the following

```js
const path = require('path');
module.exports = {
"mode": "none",
"entry": "./src/index.js",
"output": {
"path": __dirname + '/dist',
"filename": "bundle.js"
},
devServer: {
contentBase: path.join(__dirname, 'dist')
}
}
```

Inside src/index.js, Introduce a basic console.log('hi there')


### Introducing tasks for webpack 5

Webpack will act as our transpiler, making everything ready to work in any browser, 
integrating into our bundle all the tools we define and letting you work with any pipeline.

There are other bundlers in the market, but webpack is ready to fit any enterprise solution.

Years ago we were using Gulp, Grunt, Bower...but those days are gone.

Current bundle creators are: Webpack, Parcel & Rollup.

You can't have it all, so each of them perform in some tasks. 
From my point of view, webpack is amazing to perform deep details, but it brings more complexity.
Anyway feel free to use any of them.

More info about it https://betterprogramming.pub/the-battle-of-bundlers-6333a4e3eda9

A bundler performs, basically the following tasks:

- Configure your project and your custom tasks
- Eliminate old code or non used
- Transpile the code to ecma5/ecma6
Check differences on https://kangax.github.io/compat-table/es6/
- Split your code
- Live reload & hot module replacement
- Transform your modules

Current ECMA version is 10!
- ECMA 5 > Dec 2009
- ECMA 6 > June 2015

More info at https://www.c-sharpcorner.com/article/comparison-between-ecmascript-5-and-ecmascript-6-versions-of-javascript/#:~:text=While%20ECMAScript%205%20introduced%20lots,functionality%20to%20create%20typed%20arrays.

Let's configure the basic tasks
Open your package.json and write the following

```json
{
  "name": "caib-react4teachers",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/albertoSoto/react4teachers-zero2hero.git",
  "author": "Alberto Soto",
  "license": "MIT",
  "private": true,
  "devDependencies": {
    "webpack": "^5.68.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.3"
  },
  "scripts": {
    "build": "webpack",
    "dev-server": "webpack-dev-server"
  }
}
```
