var gulp   = require('gulp'),
    server = require('gulp-express');

gulp.task('server', function () {
    server.run(['server.js']);

    gulp.watch(['src/static/**/*'], server.notify);
});
