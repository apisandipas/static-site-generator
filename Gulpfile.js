/**
 * Created by bryan on 3/6/15.
 */

var gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

var config = {

};


gulp.task('compile-templates', function() {
    gulp.src(['src/*.swig','!src/layouts'])
        .pipe($.frontMatter({ property: 'data' }))
        .pipe($.swig())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['watch']);


gulp.task('watch', function(){
    gulp.watch(['src/*.swig','!src/layouts'], ['compile-templates']);
});