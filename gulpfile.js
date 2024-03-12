"use strict";

const { src, dest, watch } = require("gulp");
var postcss = require("gulp-postcss"); // Assuming PostCSS plugin is installed
const rename = require("gulp-rename");

function buildStyles(cb) {
  src("./assets/src/main.pcss")
    .pipe(postcss()) // Process the SCSS/LESS file using PostCSS
    .pipe(
      rename({
        extname: ".css",
      })
    )
    .pipe(dest("./assets/dist"))
    .on("end", cb); // Call the callback when processing finishes
}

function watchFiles(cb) {
  watch(["./assets/src/**/*.pcss"], buildStyles);
  cb();
}

exports.buildStyles = buildStyles;
exports.default = watchFiles;
