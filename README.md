# Light boilerplate for react app 🤘

## Includes:
- [reactjs](https://reactjs.org/)
- [react-router 4](https://reacttraining.com/react-router/) (example with layout usage)
- [redux](https://redux.js.org/)
- [ducks architecture](https://github.com/erikras/ducks-modular-redux)
- [styled-components](https://www.styled-components.com/)
- [jest](https://jestjs.io/) + [enzyme](http://airbnb.io/enzyme/)

## Start:
```shell
    git clone https://github.com/serheyShmyg/frontend.git && \
    cd frontend && \
    npm install && \
    npm start;
```

## Scripts
- `npm start` - run webpack dev server with app (local server, watch)
- `npm build` - make production build 
- `npm test` - run tests
- `npm test:watch` - run tests in dev mode
- `npm docz` - run docz dev mode (watch)
- `npm docz:build` - make docz build

## Polifills
If you want to use some exotic ES features and search some polifill, you can use [core-js](https://github.com/zloirock/core-js) as described here [https://babeljs.io/docs/en/v7-migration](https://babeljs.io/docs/en/v7-migration).
By default boilerplate doesn't includes any polifills, to reduce bundle size.
