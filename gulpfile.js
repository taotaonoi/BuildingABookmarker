var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function(){
	browserSync.init({
		server:{
			baseDir: './'
		},
	})
});

gulp.task('default', ['browser-sync'], function(){
	gulp.watch(['*.html'], browserSync.reload);
	gulp.watch(['js/**/*.js'], browserSync.reload);
	gulp.watch(['css/**/*.css'], browserSync.reload);
});