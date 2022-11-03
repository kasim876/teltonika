export const toProd = (done) => {
  config.isProd = true;
  done();
}