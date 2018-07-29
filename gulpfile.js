var gulp = require('gulp');
var karma = require('karma').server;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var path = require('path');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var rootDirectory = path.resolve('./');
var sourceDirectory = path.join(rootDirectory, './src');

// Tests Karma
var testDirectory = path.join(rootDirectory, './test/unit');

var sourceFiles = [

  // Chargement des modules avant le reste des fichiers javascript
  path.join(sourceDirectory, '/**/*.module.js'),

  // Chargement des fichiers javascript
  path.join(sourceDirectory, '/**/*.js')
];

var lintFiles = [
  'gulpfile.js',
  'karma-*.conf.js'
].concat(sourceFiles);

gulp.task('build', function() {
  gulp.src(sourceFiles)
    .pipe(plumber())
    .pipe(concat('google-analytics-library-angularjs.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename('google-analytics-library-angularjs.min.js'))
    .pipe(gulp.dest('./dist'));
});

/**
 * JSHINT - Tests - Build
 */
gulp.task('process-all', function (done) {
  runSequence('jshint', 'test-src', 'build', done);
});

/**
 * Watch
 */
gulp.task('watch', function () {

  // gulp.watch(sourceFiles, ['process-all']);
  // gulp.watch(path.join(testDirectory, '/**/*.js'), ['test-src']);
});

/**
 * JSHINT - Validation des sources Javascript
 */
gulp.task('jshint', function () {
  return gulp.src(lintFiles)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

/**
 * Lancement des tests
 */
gulp.task('test-src', function (done) {
  karma.start({
    configFile: __dirname + '/karma-src.conf.js',
    singleRun: true
  }, done);
});

/**
 * Lancement des tests concaténé
 */
gulp.task('test-dist-concatenated', function (done) {
  karma.start({
    configFile: __dirname + '/karma-dist-concatenated.conf.js',
    singleRun: true
  }, done);
});

/**
 * Lancement des tests minimifiés
 */
gulp.task('test-dist-minified', function (done) {
  karma.start({
    configFile: __dirname + '/karma-dist-minified.conf.js',
    singleRun: true
  }, done);
});

gulp.task('default', function () {
  runSequence('process-all', 'watch');
});
