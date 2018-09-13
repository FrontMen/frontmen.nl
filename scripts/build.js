import fse from 'fs-extra';
import config from './config';
import logger from './util/logger';
import buildPages from './pages';
import buildJavascript from './javascript';
import buildStyle from './style';
import buildAssets from './assets';
import buildSitemap from './sitemap';

const log = logger('build');
const { outputPath } = config;

log.info('Building site...');

// clear destination folder
fse
  .emptyDir(outputPath)
  .then(() => buildPages(config))
  .then(() => buildJavascript(config))
  .then(() => buildStyle(config))
  .then(() => buildAssets(config))
  .then(() => buildSitemap(config))
  .then(() => {
    log.success(`Site built done`);
  })
  .catch(err => log.error(err));
