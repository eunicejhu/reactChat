module.exports = function(env) {
  const ENV = env || 'dev';
  return require(`./webpack.${ENV}.js`);
};