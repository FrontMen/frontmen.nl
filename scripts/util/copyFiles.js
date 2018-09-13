
import fse from 'fs-extra';
import path from 'path';
import logger from './logger';

const log = logger('build:copy');
function copyFile(file, { srcPath, outputPath }) {
  return fse.copySync(path.join(srcPath, file), path.join(outputPath, file));
}

function copyFiles({ copyFiles , srcPath, outputPath}) {
  log.info('Copy static files...');
  return Promise.all([
    ...copyFiles.map(file => copyFile(file, { srcPath, outputPath })),
  ])
    .then(() => { log.success('Copy static files done') })
    .catch((err) => log.error(err))
}

export default copyFiles;