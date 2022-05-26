const { src, dest } = require("gulp");

//Configuration
const path = require("../config/path.js");

// Plugins
const gulpSvgSprite = require("gulp-svg-sprite");


// svgsprite handler
const svgsprite = () => {
    return src(path.svgSprite.src, {})
        .pipe(gulpSvgSprite({
            mode: {
                defs: {
                    sprite: `../icons/icons.svg`,
                    example: true
                }
            },
        }))
        .pipe(dest(path.svgSprite.dest, { sourcemaps: true }));
}

module.exports = svgsprite;