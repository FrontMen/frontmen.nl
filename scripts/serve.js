import chokidar from 'chokidar';
import debounce from 'lodash.debounce';
import server from './server';
import logger from './util/logger';
import config from './config';

import buildPages, { PAGE_FORMATS } from './pages';
import buildJavascript from './javascript';
import buildStyle from './style';
import buildAssets, { IMG_FORMATS, FONT_FORMATS } from './assets';

const log = logger('serve');

/**
 * Serve the site in watch mode
 */
const { srcPath, port } = config;

log.info(`Starting local server at http://localhost:${port}`);

server.serve(config);

const watcher = (ext, buildTask) => {
  chokidar.watch(`${srcPath}/**/*.${ext}`).on(
    'all',
    debounce(() => {
      buildTask(config);
    }, 500)
  );
};

watcher(`(${PAGE_FORMATS})`, buildPages);
watcher('scss', buildStyle);
watcher('js', buildJavascript);
watcher(`(${IMG_FORMATS})`, buildAssets);
watcher(`(${FONT_FORMATS})`, buildAssets);
