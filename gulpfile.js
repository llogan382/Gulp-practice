"use strict";
var gulp = require('gulp'),
// gulp-concat is added as one of the dependencies in package.json, 
//and called here
concat = require('gulp-concat'),
uglify = require('gulp-uglify').
rename = require ('gulp-rename');



//set the default tasks for gulp:
gulp.task("concatScripts", function() {
gulp.src([
'js/jquery.js', 
'js/sticky/jquery.sticky.js', 
'js/main.js'])
//below is the source file.
//pipe sends the data loaded to our concat task
//concat taks a string, the name of the file
.pipe(concat('app.js'))
//send the file to its destination
//takes the data and writes it to disk
//this is where we want our changes to end up, a directory in this case. 
.pipe(gulp.dest("js"));
});

//create another gulp task.
//create a function in the gulp-task, and an anonymous function
//as the task callback where we do our work.  
gulp.task("minifyScripts", function() {
    //grab the source file, which is the result of the concat task. 
    gulp.src("js/app.js")
    //script gets piped directly to uglify method. 
    .pipe(uglify())
    //renames the file as it is created,
    //preserving the original .js file. 
    .pipe(rename('app.min.js'))
    //results of uglify go our .js file
    .pipe(gulp.dest('js'));
} );

gulp.task("default", ["hello"], function() {
    console.log("This is the default task")
});
