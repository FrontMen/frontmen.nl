import fse from 'fs-extra';

/**
 * Loads a layout file
 */
const loadLayout = (layout, { srcPath }) => {
  const file = `${srcPath}/layouts/${layout}.ejs`;
  const data = fse.readFileSync(file, 'utf-8');

  return { file, data };
};

export default loadLayout;
