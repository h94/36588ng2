	// Sass configuration
	var gulp = require('gulp');
	var concat = require('gulp-concat');
	var sass = require('gulp-sass');

	gulp.task('sass', function() {
	    gulp.src('src/css/*.scss')
	        .pipe(concat('main.css')) //合并所有css到main.css
	        .pipe(sass().on('error', sass.logError))
	        .pipe(gulp.dest('src/css/'))

	});
	gulp.task('default', ['sass'], function() {
	    gulp.watch('src/css/*.scss', ['sass']);
	})