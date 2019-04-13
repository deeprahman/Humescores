let gulp = require('gulp');
let sass = require('gulp-sass');

//Run SASS compiler
gulp.task('sass', ()=>{
    return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('.'));
});