const { series, parallel, src, dest } = require('gulp');
const del = require('del');
const boewserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify') 


function limparDist() {
    return del([
        'dist',
    ])
}

function copiarHTML(cb) {
    return src('public/**/*')
        .pipe(dest('dist'))
}

function gerarJS(cb) {
    return boewserify({
        basedir: '.',
        entries: ['src/main.ts']
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(dest('dist'))
}

exports.default = series (
    limparDist,
    parallel(gerarJS, copiarHTML)
)




