# Boilerplate jade, sass, js (webpack)...

##Dependencies
1. [nodejs](http://nodejs.org/)

##Start:
```shell
    git clone https://github.com/serheyShmyg/gulp-frontend-browserify.git &&
    cd frontend &&
    npm install &&
    npm start;
```

##Features:
1. Multiple bundles - every file from `entries` folder will be build into separate bundle.
2. Use any tasks with different config `require('./tasks/jade')(diffConfig)`. How to use `diffConfig` see `Gulpfile/config/tasks.json`.
3. __SASS__ (`libsass`) for style.
    - autoprefixer (vendor prefixer 3 latest browser version)
    - [bourbon](http://bourbon.io/)(mixins)
    - neat
4. __JADE__ for templating
