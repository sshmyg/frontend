# Boilerplate jade, sass(compass), browserify

##Dependencies
1. [nodejs](http://nodejs.org/)
2. Ruby
3. SASS, COMPASS - (gem update --system && sudo gem install sass compass)

##Start:
```shell
    git clone https://github.com/serheyShmyg/gulp-frontend-browserify.git &&
    cd gulp-frontend-browserify &&
    npm install && 
    npm start;
```

##Features:
1. Multiple bundles - every file from `entries` folder will be build into separate bundle.
2. Free to use __es6__ syntax into javascript files. And mix it with __es5__ or __es3__;
3. `require('template.html')` - no probs;
4. Use any tasks with different config `require('./tasks/jade')(diffConfig)`. How to use `diffConfig` see `config.json` in root folder.
