const fs = require('fs');
const path = require('path');
const args = require('minimist')(process.argv.slice(2));
const package = require('../package.json');
const build = args.version;
const target = path.resolve(__dirname, '..', 'package.json');

if (args.alpha) {
  package.version = `${package.version}-alpha.${build}`;
} else {
  package.version = `${package.version}.${build}`;
}

fs.writeFile(target, JSON.stringify(package, null, 2), (err) => {
    if (err) throw err;

    console.log(`Package version ${package.version}`);
});
