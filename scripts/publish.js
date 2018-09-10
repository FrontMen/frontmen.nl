import ghPages from 'gh-pages';
import fse from 'fs-extra';
import path from 'path';
import logger from './util/logger';
import config from './config';

const log = logger('publish');

const { outputPath } = config;

log.info(`Publishing to github pages`);

const pathIndex = path.join(outputPath, 'index.html');

fse
  .pathExists(pathIndex)
  .then(exists => {
    if (!exists) {
      throw new Error(`${pathIndex} does not exist, please run build before publishing.`);
    }
  })
  .then(
    () =>
      new Promise((resolve, reject) => {
        ghPages.publish(outputPath, {}, err => {
          if (err) {
            reject(new Error(err));
          } else {
            resolve();
          }
        });
      })
  )
  .then(() => {
    log.success(`Publishing to: https://frontmen.github.io/frontmen.nl/`);
  })
  .catch(err => {
    log.error(`Publish failed: ${err.message}`);
  });
