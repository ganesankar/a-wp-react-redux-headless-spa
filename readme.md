# A React+Redux based Headless WordPress Integrated Single Page Application
WordPress theme built with react calling WP-API for content.

## Live Demo
[It's now the live theme on my personal site.](https://ganny.in/ui/reactjs/)

## Why?
I wanted to play with the shiny new WP-REST-API, explore es6 and transpiling, and finally work on a full project using React+Redux.

## Current Features
If you install it in WordPress v4.7 or greater **it will work out of the box** and have many of the features you'd want in a simple blog.

**Existing features include:**
- Dynamic menus (main menu + footer menu)
- "Template pages" equivalence for [index.php, single.php, search.php, category.php](https://github.com/jackreichert/a-wp-react-redux-theme/tree/master/src/containers)... but in React/Redux
- Search
- Category archive pages
- First level sub-categories
- Tags
- Bootstrap 4
- Threaded comments
- Dynamic Head title tag

### Provides

- react ^16.x
- react-router 4.x
- react-helmet 5.x
- styled-components 4.x
- redux 4.x
- redux-saga 0.16.x
- redux-persist 5.x

### Development

- webpack-dev-server 3.x
- react-hot-loader 4.x
- redux-devtools (with browser plugin)

`npm start`

### Building

- webpack 4.x
- babel 7.x

`npm run build`

### Code Quality

- eslint 5.xs

`npm run lint` 
