module.exports = {
    jade: {
        baseDir: "app/jade",
        src: "app/jade/**/*.jade",
        dest: "app/build/markup",
        jsonDest: "app/build/json/common.json",
        pretty: "\t",
        extension: ".html"
    },

    css: {
        src: "app/css/**/*.scss",
        dest: "app/build/css",
        autoprefixer: {
            browsers: ["last 3 version"]
        },
        sass: {
            outputStyle: "compressed"
        }
    },

    json: {
        src: "app/json/**/*.json",
        dest: "app/build/json",
        extendFile: "common.json"
    },

    js: {
        entriesPath: "app/js/entries"
    },

    server: {
        browserSync: {
            notify: false,
            ui: false,
            server: {
                directory: false,
                baseDir: "app/build/markup",
                index: "index.html",
                routes: {
                    "/css/": "app/build/css/",
                    "/js/": "app/build/js/"
                }
            }
        }
    },

    clear: {
        src: [
            "app/build",
            "./node_modules",
            "npm-debug.log"
        ]
    }
};