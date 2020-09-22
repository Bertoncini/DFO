var gulp = require("gulp");
var gutil = require("gulp-util");
var concat = require("gulp-concat");
var notify = require("gulp-notify");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");

gulp.task("scripts", function() {
  return gulp
    .src(["src/app/**/*.js"])
    .pipe(sourcemaps.init())
    .pipe(concat("bundle.js"))
    .pipe(gutil.env.type === "production" ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("src/dist/scripts/"))
    .pipe(notify({ message: "JS files successfully concated and reduced" }));
});

gulp.task("watch", function() {
  // Watch .js files
  gulp.watch("src/**/*.js", ["scripts"]);
});