const { src, dest } = require("gulp");

//Configuration
const path = require("../config/path.js");
// const path = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");


// Fonts handler
const font = () => {
    return src(path.font.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            ttitle: "Font",
            message: error.message
        }))
    }))
    .pipe(newer(path.font.dest))
    .pipe(fonter({
        formats: ["ttf", "woff", "eot", "svg"]
    }))
    .pipe(dest(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(dest(path.font.dest));
}

module.exports = font;