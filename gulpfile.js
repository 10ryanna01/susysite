var gulp = require('gulp');
  gp_concat = require('gulp-concat'),
  gp_rename = require('gulp-rename'),
  gp_uglify = require('gulp-uglify');


gulp.task('compress', function() {
    return gulp.src(['./js/jquery.js', './js/default.js', './js/superagent.js', './js/dom-event.js'])
     .pipe(gp_concat('prettyjs.js'))
     .pipe(gulp.dest('./web'))
      .pipe(gp_rename('index.js'))
     .pipe(gp_uglify())
     .pipe(gulp.dest('./web'));
    
});



var compass = require('gulp-compass');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');




 

var modernizr = require('gulp-modernizr');
gulp.task('modernizr', function() {
  gulp.src('./js/*.js')
    .pipe(modernizr())
    .pipe(gulp.dest("./web"))
});


 


 

 






var sass = require('gulp-sass');
// Gulp Sass Task 
gulp.task('sass', function() {
  gulp.src('./scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
})

// Create Gulp Default Task
// ------------------------
// Having watch within the task ensures that 'sass' has already ran before watching
// 
// This setup is slightly different from the one on the blog post at
// http://www.zell-weekeat.com/gulp-libsass-with-susy/#comment-1910185635
gulp.task('default', ['sass'], function () {
  gulp.watch('./scss/{,*/}*.{scss,sass}', ['sass'])
 
});
  
