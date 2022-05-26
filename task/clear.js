const del = require('del');

//Configuration
const path = require("../config/path.js");

// Delete dir
const clear = () => {
    return del(path.root)
}

module.exports = clear;