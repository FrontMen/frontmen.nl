import path from 'path';
import sass from 'node-sass';
import fse from 'fs-extra';
import logger from '../util/logger';

const log = logger('build:styles');

const build = (options = {}) => {
  Promise.resolve().then(() => {
    log.info('Building styling...');

    const { srcPath, outputPath } = options;
    const scssSrcPath = `${srcPath}/scss`;
    const scssOutputPath = `${outputPath}/css`;

    // Create css folder
    fse.mkdirsSync(path.resolve(scssOutputPath));

    // Render the sass
    const result = sass.renderSync({
      file: `${scssSrcPath}/main.scss`,
      outFile: `${scssOutputPath}/main.scss`
    });

    // Write to dist folder
    fse.writeFileSync(path.join(scssOutputPath, 'main.css'), result.css);

    log.success(`Building styling done`);
  });
};

export default build;
