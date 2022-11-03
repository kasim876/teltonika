import avif from "gulp-avif";

export const avifImages = () => {
    return config.gulp.src(config.path.src.images.generate)
        .pipe(avif())
        .pipe(config.gulp.dest(config.path.build.images))
        .pipe(config.browserSync.stream())
}