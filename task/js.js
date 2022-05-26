const { src, dest } = require("gulp");

//Configuration
const path = require("../config/path.js");
// const path = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");


// JavaScript handler
const js = () => {
    return src(path.js.src, { sourcemaps: true })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            ttitle: "JavaScript",
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(webpack({
        mode: "production"
    }))
    .pipe(dest(path.js.dest, { sourcemaps: true }));
}

module.exports = js;