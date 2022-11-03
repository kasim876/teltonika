import webpack from "webpack-stream";
import named from "vinyl-named";
import path from "path";

export const scripts = () => {
  return config.gulp.src(config.path.src.scripts)
    .pipe(named())
    .pipe(webpack({
      mode: config.isProd ? 'production' : 'development',
      devtool: config.isProd ? false : 'inline-source-map',
      output: {
        filename: '[name].js',
      },
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          },
          resolve: {
            fullySpecified: false,
            alias: {
              '@cmps': path.resolve('./src/components'),
              '@partials': path.resolve('./src/partials'),
            },
          }
        }],
      },
    }))
    .pipe(config.gulp.dest(config.path.build.scripts))
    .pipe(config.browserSync.stream())
}