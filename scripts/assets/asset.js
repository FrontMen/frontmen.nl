import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import path from 'path';

/**
 * Copy a single asset
 */
function copyAsset(file, { srcPath, outputPath }) {
  const fileData = path.parse(file);
  const destPath = path.join(outputPath, fileData.dir).replace('/pages', '/');

  return imagemin([path.join(srcPath, file)], destPath, {
    plugins: [imageminJpegtran(), imageminPngquant({ quality: '75' }), imageminSvgo()]
  });
}

export default copyAsset;
