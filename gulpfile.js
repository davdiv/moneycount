var gulp = require("gulp");
var clean = require("gulp-clean");
var newer = require("gulp-newer");
var gutil = require('gulp-util');
var hspCompiler = require("gulp-hsp-compiler");
var hspTranspiler = require("gulp-hsp-transpiler");

gulp.task("default", function () {
    gulp.src("bootstrap/**").pipe(newer("build/client/bootstrap")).pipe(gulp.dest("build/client/bootstrap"));
    gulp.src("node_modules/hashspace/hsp/**/*.js").pipe(newer("build/client/hsp")).pipe(gulp.dest("build/client/hsp"));
    gulp.src("node_modules/noder-js/dist/browser/**/*.js").pipe(newer("build/client/noder-js")).pipe(gulp.dest("build/client/noder-js"));
    gulp.src("src/client/**/*.hsp").pipe(newer({
        dest : "build/client",
        ext : ".js"
    })).pipe(hspCompiler().on('error', gutil.log)).pipe(hspTranspiler().on('error', gutil.log)).pipe(gulp.dest("build/client"));
    gulp.src(["src/client/**/*.html", "src/client/**/*.png"]).pipe(gulp.dest("build/client"));
});

gulp.task("watch", function () {
    gulp.watch("src/**/*", ["default"]);
});

gulp.task("clean", function () {
    gulp.src("build", {
        read : false
    }).pipe(clean());
});
