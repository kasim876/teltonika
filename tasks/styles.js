import dartSass from "sass";
import gulpSass from "gulp-sass";
import SassAlias from "sass-alias";
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps"
import avifcss from "gulp-avif-css";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import sortMediaQueries from "postcss-sort-media-queries";

import { configure } from "@emitty/core";
import emittyScss from "@emitty/language-scss";

const emitty = configure();

emitty.language({
  extensions: ['.scss'],
  parser: emittyScss.parse,
})

const sass = gulpSass(dartSass);

export const styles = () => {
  return config.gulp.src(config.path.src.styles)
    .pipe(config.gulpif(!config.isProd, sourcemaps.init()))
    .pipe(sass({
      importer: new SassAlias(config.path.alias).getImporter(),
    }))
    .pipe(config.gulpif(config.isProd, avifcss()))
    .pipe(postcss([
      autoprefixer(),
      cssnano(),
      sortMediaQueries(),
    ]))
    .pipe(config.gulpif(!config.isProd, sourcemaps.write()))
    .pipe(config.gulp.dest(config.path.build.styles))
    .pipe(config.browserSync.stream())
}