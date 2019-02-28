import path from 'path';
import { generateResponsiveImages } from './responsive-images-generator';

export const ILLUSTRATIONS_FORMATS = 'png|jpg|jpeg';

// Corresponding to $mq-breakpoints
const configs = [
  {width: '480px', rename: {suffix: '@xs'}},
  {width: '720px', rename: {suffix: '@sm'}},
  {width: '1024px', rename: {suffix: '@md'}},
  {width: '1200px', rename: {suffix: '@lg'}}
];

const suffixes = configs.map(config => config.rename.suffix);

function generateSizes(file) {
  const { name } = path.parse(file);

  if(suffixes.some(suffix => name.includes(suffix))) {
    return Promise.resolve();
  }

  return generateResponsiveImages([file], configs, { });
}

export default generateSizes;
