import glob from 'glob';
import logger from '../util/logger';
import copyAsset from './asset';

const log = logger('build:assets');

const build = (options = {}) => {
  log.info('Building assets...');

  const { srcPath, outputPath } = options;

  const files = glob.sync('**/*.@(svg|png|jpg|jpeg|ico|gif)', { cwd: srcPath });

  return Promise.all(files.map(file => copyAsset(file, { srcPath, outputPath })))
    .then(() => {
      log.success(`Building assets done`);
    })
    .catch(() => {
      log.error(`Building assets failed`);
    });
};

export default build;
