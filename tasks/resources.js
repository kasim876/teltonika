export const resources = () => {
  return config.gulp.src(config.path.src.resources)
    .pipe(config.gulp.dest(config.path.build.resources))
    .pipe(config.browserSync.stream())
}