
## Exercise 1: Intro 2 react components

npx create-react-app my-project
cd my-project
yarn add tailwindcss postcss autoprefixer -dev
npx tailwindcss init


tailwind.config.js
``js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
````
