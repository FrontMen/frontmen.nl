import fse from 'fs-extra';
import yaml from 'js-yaml';

const defaultConfig = {
  srcPath: './src',
  outputPath: './dist',
  port: 8000,
  site: {},
  copyFiles: ['_redirects', 'googlee7ef5c56ec521bd0.html', 'favicon.ico']
};

const siteConfig = yaml.safeLoad(fse.readFileSync('./config.yml', 'utf-8'));

let siteConfigProduction = {};
if (process.env.NODE_ENV === 'production') {
  siteConfigProduction = yaml.safeLoad(fse.readFileSync('./config.production.yml', 'utf-8'));
}

// Merge default configuration with production overwrites
const siteData = {
  site: Object.assign({}, siteConfig, siteConfigProduction)
};

export default Object.assign({}, defaultConfig, siteData);
