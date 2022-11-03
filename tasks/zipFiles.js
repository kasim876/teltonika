import zip from "gulp-zip";
import path from "path";

const nameProject = path.basename(path.resolve());

export const zipFiles = () => {
  return config.gulp.src(config.path.buildFolder)
    .pipe(zip(`${nameProject}.zip`))
    .pipe(config.gulp.dest(config.path.buildFolder))
}