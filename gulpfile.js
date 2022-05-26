const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// Configuration
const path = require("./config/path.js");

// Tasks
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const font = require('./task/font.js');
const svgsprite = require('./task/svgsprite.js');


// Server
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

// Watch
const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.font.watch, font).on("all", browserSync.reload);
}

// Production
const build = series(
    clear,
    parallel(html, scss, js, img, font, svgsprite)
);

const dev = series(
    build,
    parallel(watcher, server)
);


// Tasks
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.svgsprite = svgsprite;

// Build
exports.dev = dev;
exports.build = build;

console.log(process.argv);