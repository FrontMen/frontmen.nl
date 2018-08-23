import glob from 'glob';
import logger from '../util/logger';
import processImage, { IMG_FORMATS } from './image';
import processFont, { FONT_FORMATS } from './font';

const log = logger('build:assets');

const build = (options = {}) => {
  log.info('Building assets...');

  const { srcPath, outputPath } = options;

  const imgFiles = glob.sync(`**/*.@(${IMG_FORMATS})`, { cwd: srcPath });
  const fontFiles = glob.sync(`**/*.@(${FONT_FORMATS})`, { cwd: srcPath });

  return Promise.all([
    imgFiles.map(file => processImage(file, { srcPath, outputPath })),
    fontFiles.map(file => processFont(file, { srcPath, outputPath }))
  ])
    .then(() => {
      log.success(`Building assets done`);
    })
    .catch(() => {
      log.error(`Building assets failed`);
    });
};

export { IMG_FORMATS, FONT_FORMATS };
export default build;

