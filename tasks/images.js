import imagemin from "gulp-imagemin";

export const images = () => {
  return config.gulp.src(config.path.src.images.copy)
    .pipe(config.gulpif(config.isProd, imagemin([
      imagemin.mozjpeg({
        quality: 80,
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 2
      }),
    ])))
    .pipe(config.gulp.dest(config.path.build.images))
    .pipe(config.browserSync.stream())
}