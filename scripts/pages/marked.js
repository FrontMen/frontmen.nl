import marked from 'marked';
import headingRender from './renderers/heading';
import blockquoteRender from './renderers/blockquote';
import imageRender from './renderers/image';
import paragraphRender from './renderers/paragraph';

// Get reference
const render = new marked.Renderer();

// render.code = function(code, lang, escaped) { }
render.blockquote = blockquoteRender;
// render.html = function(html) { }
render.heading = headingRender;
// render.hr = function() { }
// render.list = function(body, ordered, start) { }
// render.listitem = function(text) { }
// render.checkbox = function(checked { }
render.paragraph = paragraphRender;
// render.table = function(header, body) { }
// render.tablerow = function(content) { }
// render.tablecell = function(content, flags) { }
// render.strong = function(text) { }
// render.em = function(text) { }
// render.codespan = function(text) { }
// render.br = function() { }
// render.del = function(text) { }
// render.link = function(href, title, text) { }
render.image = imageRender;
// render.text = function(text) { }

function markedRenderer(content = "") {
  return marked(content, { renderer: render });
}

export default markedRenderer;
