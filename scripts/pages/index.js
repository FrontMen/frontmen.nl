import glob from 'glob';
import logger from '../util/logger';
import buildPage from './page';

const log = logger('build:pages');

const build = (options = {}) =>
  Promise.resolve().then(() => {
    log.info('Building pages...');

    const { srcPath, outputPath, site } = options;

    // read pages
    const files = glob.sync('**/*.@(md|ejs|html)', { cwd: `${srcPath}/pages` });
    files.forEach(file => {
      try {
        buildPage(file, { srcPath, outputPath, site });
      } catch (e) {
        log.error(`Error trying to build page`);
        log.error(srcPath);
        log.error(e);
      }
    });

    log.success(`Building pages done`);
  });

export default build;
