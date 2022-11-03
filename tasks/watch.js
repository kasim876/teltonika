import { markup } from "./markup.js";
import { styles } from "./styles.js";
import { scripts } from "./scripts.js";
import { images } from "./images.js";
import { sprite } from "./sprite.js";
import { resources } from "./resources.js";

export const watch = () => {
  config.browserSync.init({
    server: {
      baseDir: config.path.buildFolder
    }
  })

  config.gulp.watch(config.path.watch.markup, markup);
  config.gulp.watch(config.path.watch.styles, styles);
  config.gulp.watch(config.path.watch.scripts, scripts);
  config.gulp.watch(config.path.watch.images, images);
  config.gulp.watch(config.path.watch.sprite, sprite);
  config.gulp.watch(config.path.watch.resources, resources);
}