# Light boilerplate for react app 🤘

## Includes:

- [reactjs](https://reactjs.org/)
- [react-router 5](https://reacttraining.com/react-router/) (example with layout
  usage)
- [localization with react-intl](https://github.com/formatjs/react-intl)
- [redux](https://redux.js.org/)
- [ducks architecture](https://github.com/erikras/ducks-modular-redux)
- [jest](https://jestjs.io/) + [testing-library](https://testing-library.com/)
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
- `npm run prod` - make production build
- `npm run start:prod` - start production build
- `npm run test` - run tests
- `npm run test:watch` - run tests in dev mode
- `npm run story` - run storybook
- `npm run locale` - generate localization messages

## Polifills

If you want to use some exotic ES features and search some polifill, you can use
[core-js](https://github.com/zloirock/core-js) as described here
[https://babeljs.io/docs/en/v7-migration](https://babeljs.io/docs/en/v7-migration).
By default boilerplate doesn't includes any polifills, to reduce bundle size.

## TypeScript

Enable typescript (all required packages already installed):

- Rename `tsconfig.json.bkp` to `tsconfig.json`;
- Open `babel.config.js` and add babel preset `@babel/preset-typescript` (all
  job does this preset)
- Open `.eslintrc.js` change `parser` param to `@typescript-eslint/parser` and
  add this plugin `plugin:@typescript-eslint/recommended`
- **Don't forget to use `*.ts` and `*.tsx` files extensions during development**
