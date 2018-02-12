var gulp = require('gulp');
var jsonminify = require('gulp-jsonminify');

gulp.task('default', function () {
  gulp.src(['./src/*.json', './src/*.geojson'])
      .pipe(jsonminify())
      .pipe(gulp.dest('dist'));
});
