const { src, dest } = require("gulp");

//Configuration
const path = require("../config/path.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require('gulp-file-include');
const webpHtml = require('gulp-webp-html');

// Html handler
const html = () => {
    return src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            ttitle: "HTML",
            message: error.message
        }))
    }))
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(dest(path.html.dest));
}

module.exports = html;