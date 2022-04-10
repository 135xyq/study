const { src, dest, series, watch } = require('gulp');
const htmlClean = require('gulp-htmlclean'); //压缩html的插件
const less = require('gulp-less'); //将less转为css的插件
const cssClean = require('gulp-clean-css'); //压缩css的插件
const stripDebug = require('gulp-strip-debug'); //删除js里面的一些调试信息
const uglify = require('gulp-uglify'); //压缩js
const connect = require('gulp-connect'); //搭建服务器

// const imgMin = import ('gulp-imagemin'); //压缩图片


const folder = {
    src: 'src/',
    dist: 'dist/'
}

function html() {
    return src(folder.src + 'html/*')
        .pipe(htmlClean())
        .pipe(dest(folder.dist + 'html/'))
        .pipe(connect.reload());
}

function css() {
    return src(folder.src + 'css/*')
        .pipe(less())
        .pipe(cssClean())
        .pipe(dest(folder.dist + 'css/'))
        .pipe(connect.reload());
}

function js() {
    return src(folder.src + 'js/*')
        // .pipe(stripDebug())
        // .pipe(uglify())
        .pipe(dest(folder.dist + 'js/'))
        .pipe(connect.reload());
}

function image() {
    return src(folder.src + 'images/*')
        // .pipe(imgMin())
        .pipe(dest(folder.dist + 'images/'));
}

function server(cb) {
    connect.server({
        port: '1573',
        livereload: true, //自动刷新
    });
    cb();
}

watch(folder.src + 'html/*', function(cb) {
    html();
    cb();
})
watch(folder.src + 'css/*', function(cb) {
    css();
    cb();
})
watch(folder.src + 'js/*', function(cb) {
    js();
    cb();
})

exports.default = series(html, css, js, image, server);