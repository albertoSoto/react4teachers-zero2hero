# React course: react4teachers-zero2hero

Teaching boilerplate for teachers that are learning how to program with React.

Course offered by Conselleria d'Educació de les Illes Balears. 2022

Training perform by Alberto Soto Fernandez

## System requirements

To follow this guide, you'll need to set up the following tools:

- nodejs/npm
- yarn
- and IDE of your choice (I am in ♡ love with Intellij and Jetbrains tools)
- git client

Most of the build process will be performed with yarn, due to the workspaces feature. Feel free to use npm if you are
confident with it.

## Content : Stage 1 - Intro to vanillaJS

### Starting the project

We will set up a project based on vanillaJs, using webpack 5 as a base to stablish our knowledge

To achieve it, perform the following steps:

```bash
# yarn init --private
# Option for all yes by default and private
yarn init -yp
yarn add autoprefixer postcss tailwindcss vite sass --dev
touch tailwind.config.js
touch vite.config.js
touch postcss.config.js
mkdir src
mkdir dist
touch src/js/main.js
touch src/index.html
```

Inside the tailwind.config.js insert the following

```js
module.exports = {
    content: ["./src/index.html",],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

Inside src/index.js, Introduce a basic console.log('hi there')

Inside the vite.config.js insert the following

```js
module.exports = {
    root: 'src',
    build: {
        outDir: '../dist'
    },  theme: {
        extend: {},
    },
    plugins: [],
}
```


Inside the vite.config.js insert the following

```js
module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
}
```




### Introducing tasks for vite

Webpack 5 and Vite are the most common bundlers nowadays.
They act as our transpiler, making everything ready to work in any browser, integrating into our bundle all the
tools we define and letting you work with any pipeline.

There are other bundlers in the market, but webpack is ready to fit any enterprise solution.

Years ago we were using Gulp, Grunt, Bower...but those days are gone.

Current bundle creators are: Webpack, Vite, Parcel & Rollup.

You can't have it all, so each of them perform in some tasks. From my point of view, webpack is amazing to perform deep
details, but it brings more complexity. Anyway feel free to use any of them.

More info about it https://betterprogramming.pub/the-battle-of-bundlers-6333a4e3eda9

A bundler performs, basically the following tasks:

- Configure your project and your custom tasks
- Eliminate old code or non used
- Transpile the code to ecma5/ecma6 Check differences on https://kangax.github.io/compat-table/es6/
- Split your code
- Live reload & hot module replacement
- Transform your modules

Current ECMA version is 10!

- ECMA 5 > Dec 2009
- ECMA 6 > June 2015

More info
at https://www.c-sharpcorner.com/article/comparison-between-ecmascript-5-and-ecmascript-6-versions-of-javascript/#:~:text=While%20ECMAScript%205%20introduced%20lots,functionality%20to%20create%20typed%20arrays

#### Exercise 1: my first js bundle

Generate a src/index.html with the following:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <link rel="icon" type="image/svg+xml" href="favicon.svg"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>React 4 teachers</title>
    <link rel="stylesheet" href="/styles/style.css"/>
</head>
<body class="text-gray-700 bg-white" style="font-family: 'Source Sans Pro', sans-serif">
<nav>
    <div class="container mx-auto px-6 py-2 flex justify-between items-center">
        <a class="font-bold text-2xl lg:text-4xl alternative-font" href="#">
            React 4 teachers
        </a>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>React 4 teachers</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div class="hidden lg:block">
            <ul class="inline-flex">
                <li><a class="px-4 font-bold" href="/">Home</a></li>
                <li><a class="px-4 hover:text-gray-800" href="#">Ejercicio 1</a></li>
                <li><a class="px-4 hover:text-gray-800" href="#">Ejercicio 2</a></li>
                <li><a class="px-4 hover:text-gray-800" href="#">Ejercicio 3</a></li>
            </ul>
        </div>
    </div>
</nav>
<div id="app" class="py-20" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)">
    <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-2 text-white">
            React 4 teachers
        </h2>
        <h3 class="text-2xl mb-8 text-gray-200">
            Capitulo 1: Explorando vanillajs!
        </h3>
        <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Quiero aprender react, no vanillajs!
        </button>
    </div>
</div>
<script type="module" src="/js/main.js"></script>
</body>
</html>
```


Let's configure the basic tasks. Open your package.json and write the following

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
    "autoprefixer": "^10.4.2",
    "postcss": "^8.4.5",
    "tailwindcss": "^3.0.15",
    "vite": "^2.7.2"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
}

```

## Let's generate our first bundle

Now that we have our project with some tasks we can start with it, open a terminal and do the following

```bash
yarn run build
#or
npm run build
```

This is executing the task you need, generating a basic js file, under /dist folder that will be compatible If you open
the content you'll see the following


Nothing great still!

#### Exercise 2: css pipelines


> touch src/styles/main.css
> touch src/styles/alternative.scss

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;
.alternative-font {
  font: 100% $font-stack;
  color: $primary-color;
}
```

This will let you load the styles from js into html!

```js
import './styles/alternative.scss';

console.log('hi there')
```

Now execute yarn build again and check you contents, differences start to appear!
Check your reference label and seee how scss it#s processed and loaded

### Part II: Discover vanillaJs


Now we are going to play with some basic exercises:

### The 3 ways of a function


