import { exec } from 'child_process';
import logger from '../util/logger';

const log = logger('build:js');

const build = () =>
  new Promise((resolve, reject) => {
    log.info('Building javascript...');

    exec(`webpack`, { shell: true }, error => {
      if (error) {
        reject(error);
      } else {
        log.success(`Building javascript done`);
        resolve();
      }
    });
  });

export default build;
