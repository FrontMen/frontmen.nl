
import fse from 'fs-extra';
import path from 'path';

export const FONT_FORMATS = 'otf|woff|ttf';

function copyAsset(file, { srcPath, outputPath }) {
  return fse.copySync(path.join(srcPath, file), path.join(outputPath, file));
}
export default copyAsset;