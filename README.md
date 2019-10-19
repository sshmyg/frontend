# Light boilerplate for react app 🤘

## Includes:

- [reactjs](https://reactjs.org/)
- [react-router 5](https://reacttraining.com/react-router/) (example with layout usage)
- [localization with react-intl](https://github.com/formatjs/react-intl)
- [redux](https://redux.js.org/)
- [ducks architecture](https://github.com/erikras/ducks-modular-redux)
- [jest](https://jestjs.io/) + [enzyme](http://airbnb.io/enzyme/)
- [doc](https://storybook.js.org/)

## Start:

```shell
    git clone https://github.com/serheyShmyg/frontend.git && \
    cd frontend && \
    npm install && \
    npm start;
```

## Scripts

- `npm start` - run webpack dev server with app (local server, watch)
- `npm run build` - make production build
- `npm run test` - run tests
- `npm run test:watch` - run tests in dev mode
- `npm run doc` - run storybook
- `npm run locale` - generate localization messages

## Polifills

If you want to use some exotic ES features and search some polifill, you can use [core-js](https://github.com/zloirock/core-js) as described here [https://babeljs.io/docs/en/v7-migration](https://babeljs.io/docs/en/v7-migration).
By default boilerplate doesn't includes any polifills, to reduce bundle size.
