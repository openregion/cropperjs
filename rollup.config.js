const { babel } = require('@rollup/plugin-babel');
const changeCase = require('change-case');
const createBanner = require('create-banner');
const pkg = require('./package.json');

const pkgName = pkg.name.replace(/^.*\//, '').replace('js', '');

const name = changeCase.pascalCase(pkgName);
const banner = createBanner({
  data: {
    name: `${name}.js`,
    year: '2015-present',
  },
});

module.exports = {
  input: 'src/index.js',
  output: [
    {
      banner,
      name,
      file: `dist/${pkgName}.js`,
      format: 'umd',
    },
    {
      banner,
      file: `dist/${pkgName}.common.js`,
      format: 'cjs',
      exports: 'auto',
    },
    {
      banner,
      file: `dist/${pkgName}.esm.js`,
      format: 'esm',
    },
    {
      banner,
      name,
      file: `docs/js/${pkgName}.js`,
      format: 'umd',
    },
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
  ],
};
