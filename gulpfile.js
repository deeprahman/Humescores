let gulp = require('gulp');
let sass = require('gulp-sass');
let watch = require('gulp-watch');
//Run SASS compiler
gulp.task('sass', ()=>{
    return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('.'));
});

//Run the sass watcher
gulp.task('watch', function(){
    return watch('./sass/**/*.scss',function() {
        gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('.'));
    });
});