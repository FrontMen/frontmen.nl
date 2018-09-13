import logger from '../util/logger';
import generateSitemap from 'sitemap-static'
import path from 'path';
import fs from 'fs';

const log = logger('build:sitemap');

const build = (options = {}) =>
  new Promise((resolve, reject) => {
    log.info('Building sitemap...');
    const { outputPath } = options;
    const writer = fs.createWriteStream(path.join(outputPath, 'sitemap.xml'));
    try {
      generateSitemap(writer, {
        findRoot: outputPath,
        ignoreFile: '.sitemapignore.json',
        prefix: 'https://www.frontmen.nl/',
        pretty: true

      });
      log.success(`Building sitemap done`);
      resolve();

    } catch (error) {
      log.error(error)
      reject(error);
    }
  });


export default build;







