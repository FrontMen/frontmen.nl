import chokidar from 'chokidar';
import debounce from 'lodash.debounce';
import server from './server';
import logger from './util/logger';
import config from './config';

import buildPages from './pages';
import buildJavascript from './javascript';
import buildStyle from './style';
import buildAssets from './assets';

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

watcher('(ejs|html|md)', buildPages);
watcher('scss', buildStyle);
watcher('js', buildJavascript);
watcher('(svg|png|jpg|jpeg|ico|gif)', buildAssets);
