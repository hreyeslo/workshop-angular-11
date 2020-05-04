const fs = require('fs');
const concat = require('concat');

const argv = require('minimist')(process.argv.slice(2));

const appName = argv['name'] || null;
const distFolder = './dist';
const path = `${distFolder}/${appName}`;

const jsVersion = argv['version'] || 'es2015'; // es5 o es2015

if (appName && fs.existsSync(path)) {
  (async function build() {
    const files = [
      `${path}/runtime-${jsVersion}.js`,
      `${path}/polyfills-${jsVersion}.js`,
      `${path}/styles-${jsVersion}.js`,
      `${path}/main-${jsVersion}.js`
    ];
    await concat(files, `${path}/${appName}.js`);
  })();
}



