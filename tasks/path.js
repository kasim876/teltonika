const buildFolder = `./build`;
const srcFolder = `./src`;

export const path = {
  build: {
    markup: `${buildFolder}/`,
    styles: `${buildFolder}/styles`,
    scripts: `${buildFolder}/scripts`,
    images: `${buildFolder}/images`,
    resources: `${buildFolder}/resources`,
    sprite: `${buildFolder}/images`
  },
  src: {
    markup: [`${srcFolder}/*.pug`, `!${srcFolder}/_mixins.pug`],
    styles: [`${srcFolder}/styles/main.scss`, `${srcFolder}/styles/pages/*.scss`],
    scripts: [`${srcFolder}/scripts/*.js`, `${srcFolder}/scripts/_defaults/*.js`],
    images: {
      "copy": `${srcFolder}/images/**/*`,
      "generate": `${srcFolder}/images/**/*.{jpg,jpeg,png}`
    },
    resources: `${srcFolder}/resources/**/*.*`,
    sprite: `${srcFolder}/images/svg/*.*`
  },
  watch: {
    markup: [`${srcFolder}/*.pug`, `${srcFolder}/partials/**/*.pug`, `${srcFolder}/components/**/*.pug`],
    styles: [`${srcFolder}/styles/**/*.scss`, `${srcFolder}/partials/**/*.scss`, `${srcFolder}/components/**/*.scss`],
    scripts: [`${srcFolder}/scripts/**/*.js`, `${srcFolder}/partials/**/*.js`, `${srcFolder}/components/**/*.js`],
    images: `${srcFolder}/images/**/*`,
    resources: `${srcFolder}/resources/**/*`,
    sprite: `${srcFolder}/images/svg/*.*`
  },
  alias: {
    '@cmps': './src/components',
    '@partials': './src/partials',
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
}