import path from 'path';
import fse from 'fs-extra';
import frontMatter from 'front-matter';
import marked from 'marked';
import ejs from 'ejs';
import loadLayout from './layout';

/**
 * Build a single page
 */
function buildPage(file, { srcPath, outputPath, site }) {
  const fileData = path.parse(file);
  let destPath = path.join(outputPath, fileData.dir);

  // create extra dir if filename is not index
  if (fileData.name !== 'index') {
    destPath = path.join(destPath, fileData.name);
  }

  // create destination directory
  fse.mkdirsSync(destPath);

  // read page file
  const data = fse.readFileSync(`${srcPath}/pages/${file}`, 'utf-8');

  // render page
  const pageData = frontMatter(data);

  const templateConfig = {
    site,
    page: Object.assign({}, pageData.attributes, { url: `/${fileData.dir}` })
  };

  let pageContent;
  const pageSlug = file.split(path.sep).join('-');

  // generate page content according to file type
  switch (fileData.ext) {
    case '.md':
      pageContent = marked(pageData.body);
      break;
    case '.ejs':
      pageContent = ejs.render(pageData.body, templateConfig, {
        filename: `${srcPath}/page-${pageSlug}`
      });
      break;
    default:
      pageContent = pageData.body;
  }

  // render layout with page contents
  const layoutName = pageData.attributes.layout || 'default';
  const layout = loadLayout(layoutName, {
    srcPath
  });

  const completePage = ejs.render(
    layout.data,
    Object.assign({}, templateConfig, {
      body: pageContent,
      filename: `${srcPath}/layout-${layoutName}`
    })
  );

  // save the html file
  fse.writeFileSync(`${destPath}/index.html`, completePage);
}

export default buildPage;
