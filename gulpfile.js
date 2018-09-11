"use strict";
var gulp = require('gulp'),

// gulp-concat is added as one of the dependencies in package.json, 
//and called here
concat = require('gulp-concat');

//set the default tasks for gulp:
gulp.task("concatScripts", function() {
gulp.src([
'js/jquery.js', 
'js/sticky/jquery.sticky.js', 
'js/main.js'])
//below is the source file.
//pipe sends the data loaded to our concat task
//concat taks a string, the name of the file
.pipe(concat("app.js"))
//send the file to its destination
//takes the data and writes it to disk
//this is where we want our changes to end up, a directory in this case. 
.pipe(gulp.dest("js"));
});

gulp.task("default", ["hello"], function() {
    console.log("This is the default task")
});
