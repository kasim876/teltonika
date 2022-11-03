// импорт основных модулей
import gulp from "gulp";
import gulpif from "gulp-if";
import browserSync from "browser-sync";
// импорт путей проекта
import { path } from "./tasks/path.js";

global.config = {
  path: path,
  gulp: gulp,
  gulpif: gulpif,
  browserSync: browserSync,
  isProd: false,
}

import { toProd } from "./tasks/toProd.js";
import { clean } from "./tasks/clean.js";
import { markup } from "./tasks/markup.js";
import { styles } from "./tasks/styles.js";
import { scripts } from "./tasks/scripts.js";
import { images } from "./tasks/images.js";
import { webpImages } from "./tasks/webpImages.js";
import { avifImages } from "./tasks/avifImages.js";
import { sprite } from "./tasks/sprite.js";
import { resources } from "./tasks/resources.js";
import { watch } from "./tasks/watch.js";
import { zipFiles } from "./tasks/zipFiles.js";

export const dev = gulp.series(clean, markup, styles, scripts, images, sprite, resources, watch);
export const build = gulp.series(toProd, clean, markup, styles, scripts, images, webpImages, avifImages, sprite, resources);
export const zip = zipFiles;