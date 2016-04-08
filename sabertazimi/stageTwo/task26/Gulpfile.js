var gulp    = require('gulp'),                 //基础库
    minifycss = require('gulp-minify-css'),    //css压缩
    uglify  = require('gulp-uglify'),          //js压缩
    rename = require('gulp-rename'),           //重命名
    concat  = require('gulp-concat'),          //合并文件
    clean = require('gulp-clean'),             //清空文件夹
    gutil = require('gulp-util');

// HTML处理
gulp.task('html', function() {
    var htmlSrc = './src/*.html',
        htmlDst = './dist/';

    gulp.src(htmlSrc)
        .pipe(gulp.dest(htmlDst));
});

// 样式处理
gulp.task('css', function () {
    var cssSrc = './src/css/*.css',
        cssDst = './dist/css';

    gulp.src(cssSrc)
        .pipe(gulp.dest(cssDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(cssDst));
});

// js处理
gulp.task('js', function () {
    var jsSrc = './src/js/*.js',
        jsDst = './dist/js';

    gulp.src(jsSrc)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(jsDst));
});

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['./dist/css', './dist/js'], {read: false})
        .pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function(){
    gulp.start('html','css','js');
});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){

        // 监听html
        gulp.watch('./src/*.html', function(event){
            gulp.run('html');
        });

        // 监听css
        gulp.watch('./src/css/*.scss', function(){
            gulp.run('css');
        });

        // 监听js
        gulp.watch('./src/js/*.js', function(){
            gulp.run('js');
        });
});
