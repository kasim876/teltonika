import htmlbeautify from "gulp-html-beautify";
import GulpPug from "gulp-pug";
import pugAlias from "pug-alias";

import { configure } from "@emitty/core";
import emittyPug from "@emitty/language-pug";

const emitty = configure();

emitty.language({
  extensions: ['.pug'],
  parser: emittyPug.parse,
})

export const markup = () => {
  return config.gulp.src(config.path.src.markup)
    .pipe(GulpPug({
      pretty: !config.isProd,
      plugins: [pugAlias(config.path.alias)],
      data: [config.isProd]
    }))
    .pipe(config.gulpif(!config.isProd, htmlbeautify({
      "indent_size": 2,
    })))
    .pipe(config.gulp.dest(config.path.build.markup))
    .pipe(config.browserSync.stream())
}