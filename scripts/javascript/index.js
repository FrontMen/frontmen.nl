import { exec } from 'child_process';
import logger from '../util/logger';

const log = logger('build:js');

const build = (options = {}) => {
  Promise.resolve().then(() => {
    log.info('Building javascript...');

    // TODO
    // const { srcPath, outputPath } = options;

    exec(`webpack`, { shell: true });

    log.success(`Building javascript done`);
  });
};

export default build;
