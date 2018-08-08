import fse from 'fs-extra';
import yaml from 'js-yaml';

const defaultConfig = {
  srcPath: './src',
  outputPath: './dist',
  port: 8000,
  site: {}
};

const siteData = {
  site: yaml.safeLoad(fse.readFileSync(`./config.yml`, 'utf-8'))
};

export default Object.assign({}, defaultConfig, siteData);
