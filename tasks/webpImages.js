import webp from "gulp-webp";

export const webpImages = () => {
  return config.gulp.src(config.path.src.images.generate)
    .pipe(webp())
    .pipe(config.gulp.dest(config.path.build.images))
    .pipe(config.browserSync.stream())
}