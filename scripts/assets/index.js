import glob from 'glob';
import logger from '../util/logger';
import processImage, { IMG_FORMATS } from './image';
import processFont, { FONT_FORMATS } from './font';
import generateResponsive, { ILLUSTRATIONS_FORMATS } from './responsive';

const log = logger('build:assets');

const responsiveImages = (srcPath) => {
  if(process.env.NODE_ENV === 'production') {
    return Promise.resolve();
  }
  return glob.sync(`${srcPath}/**/*.@(${ILLUSTRATIONS_FORMATS})`)
    .map(file => generateResponsive(file));
};

const build = (options = {}) => {
  log.info('Building assets...');

  const { srcPath, outputPath } = options;

  const imgFiles = glob.sync(`**/*.@(${IMG_FORMATS})`, { cwd: srcPath });
  const fontFiles = glob.sync(`**/*.@(${FONT_FORMATS})`, { cwd: srcPath });

  return Promise.all([responsiveImages(srcPath)])
    .then(() => {
      return Promise.all([
        ...imgFiles.map(file => processImage(file, { srcPath, outputPath })),
        ...fontFiles.map(file => processFont(file, { srcPath, outputPath }))
      ]);
    })
    .then(() => {
      log.success(`Building assets done`);
    })
    .catch(() => {
      log.error(`Building assets failed`);
    });
};

export { IMG_FORMATS, FONT_FORMATS, ILLUSTRATIONS_FORMATS };
export default build;
