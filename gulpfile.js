const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function html() {
    return gulp.src('pages/**/*.+(html|njk)')
        .pipe(nunjucksRender({
            path: ['src/templates/'] // String or Array
        }))
        .pipe(gulp.dest('dist'));
}

function styles() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
};

function browser() {
    browserSync.init({
        server: {
            baseDir: './dist',
            reloadDebounce: 2000 // 加入 Debounce 可以避免短時間大量編譯，造成瀏覽器不斷重新 Refresh 的問題
        },
    });
}

function watch() {
    watch('src/scss/*.scss', gulp.series(styles));
}

exports.default = gulp.series(html, styles, gulp.parallel(browser, watch));