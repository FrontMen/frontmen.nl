import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import path from 'path';

export const IMG_FORMATS = 'svg|png|jpg|jpeg|ico|gif';

/**
 * Copy a single asset
 */
function copyAsset(file, { srcPath, outputPath }) {
  const fileData = path.parse(file);
  const destPath = path.join(outputPath, fileData.dir).replace('/pages', '/');

  return imagemin([path.join(srcPath, file)], destPath, {
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: '75'
      }),
      imageminSvgo({
        plugins: [{ removeViewBox: false }, { removeDimensions: true }]
      })
    ]
  });
}

export default copyAsset;
