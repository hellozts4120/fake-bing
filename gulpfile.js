var gulp = require('gulp'),
    gulpScss = require('gulp-sass'),
    gulpMinifycss = require('gulp-minify-css');

var path = {
    css: 'styles/css/'
}

gulp.task('scss-monitor', function() {

    gulp.src(['styles/scss/*.scss'])
    .pipe(gulpScss().on('error', gulpScss.logError))
    .pipe(gulpMinifycss())
    .pipe(gulp.dest(path.css));

});

gulp.task('scss-watch', function() {
    gulp.watch('styles/scss/*.scss',['scss-monitor']);
});

gulp.task('default', ['scss-watch']);