#gulp-requirejs2

[![Dependency Status](https://david-dm.org/robinthrift/gulp-requirejs.png)](https://david-dm.org/robinthrift/gulp-requirejs)
[![Build Status](https://travis-ci.org/RobinThrift/gulp-requirejs.png?branch=master)](https://travis-ci.org/RobinThrift/gulp-requirejs)

## Information

A small, simple, very easy wrapper around the [require.js optimizer](https://github.com/jrburke/r.js) to work with [gulp.js](https://github.com/gulpjs/gulp)

<table>
<tr> 
<td>Package</td><td>gulp-requirejs2</td>
</tr>
<tr>
<td>Description</td>
<td>uses require.js's r.js optimizer to combine require.js AMD modules into one file</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.4</td>
</tr>
</table>


##Installation

Simply add `gulp-requirejs2` as a dev-dependency in your package.json or run

```bash
$ npm install --save-dev gulp-requirejs2
```

## Usage

Because the require.js optimizer (_r.js_) is a kind of build system in itself we can't use the `gulp.src([...])` syntax at the moment (I might add this in future), instead this wrapper itself emits a pipable stream, holding a 'virtual' file, in which the result of the r.js build process are saved.
  
The resulting stream can be treated like a regular `gulp.src(...)` stream.

>NOTE: The built in minification/obfuscation is deactivated by default and can not be switched on. Please use a gulp plugin like gulp-uglify for this.

```javascript
var gulp = require('gulp'),
    rjs = require('gulp-requirejs2');

gulp.task('requirejsBuild', function() {
    rjs({
        baseUrl: 'path/to/your/base/file.js',
        out: 'FILENAME_TO_BE_OUTPUTTED',
        shim: {
            // standard require.js shim options
        },
        // ... more require.js options
    })
        .pipe(gulp.dest('./deploy/')); // pipe it to the output DIR
});
```

### Error handling

gulp-requirejs will emit errors when you don't pass an options object and if the `baseUrl` or `out` properties are undefined. 
  
The require.js optimizer itself might also emit errors; unfortunately there's no way of catching them elegantly at the moment. 


## Options

The options object supports the same parameters as the [require.js optimizer](https://github.com/jrburke/r.js).

