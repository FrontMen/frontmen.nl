export default (href, title, text) => {
  return `
    <img class="u-img-responsive" src="${href}" alt="${text}" ${title ? 'title="'+ title +'"' : ""} />
  `;
}
