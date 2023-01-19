const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
const { uglify } = require('rollup-plugin-uglify');
const scss = require('rollup-plugin-scss');

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);
  return {
    ...nxConfig,
    plugins: [
      uglify(),
      scss({
        name: 'styles.css',
        fileName: 'styles.css',
        outputStyle: 'compressed',
      }),
    ].concat(nxConfig.plugins),
  };
};
