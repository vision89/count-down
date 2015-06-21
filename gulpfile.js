var gulp = require ( 'gulp' );
var uglify = require ( 'gulp-uglify' );
var rename = require( 'gulp-rename' );

gulp.task( 'default', function () {
	
});

gulp.task( 'compress', function () {

	return gulp.src( 'src/count-down.js' )
	.pipe( uglify() )
	.pipe( rename({

		extname: '.min.js'

	}))
	.pipe( gulp.dest( 'dist' ));

});