const gulp = require("gulp"),
    watch = require("gulp-watch"),
    prefixer = require("gulp-autoprefixer"),
    uglify = require("gulp-uglify"),
    babel = require('gulp-babel'),
    sass = require("gulp-sass"),
    cleanCSS = require('gulp-clean-css'),
    render = require('gulp-nunjucks-render'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream');
const path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/templates/**/*.html',
        js: 'src/js/*.js',
        style: 'src/css/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/*.js',
        style: 'src/css/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/*.*'
    }
};

const config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'dev.io',
    port: 3123,
    logPrefix: "front-end"
};


gulp.task('webserver', function() {
    browserSync(config);

});


gulp.task('html:build', function() {
    gulp.src(path.src.html)
        .pipe(render({
            path: ['src/templates']
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({ stream: true }));
});


gulp.task('js:build', function() {
    gulp.src(path.src.js)
        .pipe(webpackStream({
            output: {
                filename: 'app.js',
            },
            module: {
                rules: [{
                    test: /\.(js)$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['env']
                    }
                }]
            }
        }))
        .pipe(gulp.dest(path.build.js))
       
        .pipe(reload({ stream: true }));
})


gulp.task('style:build', function() {
    gulp.src(path.src.style)
        .pipe(sass({
            errLogToConsole: false
        }))
        //.pipe(prefixer())
        //.pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({ stream: true }));
});

gulp.task('image:build', function() {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({ stream: true }));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

gulp.task('watch', function() {
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});



gulp.task('default', ['build', 'webserver', 'watch']);