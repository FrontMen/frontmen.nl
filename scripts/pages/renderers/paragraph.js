export default (text) => {
  if(text.includes('<img')) {
    return text;
  }
  return `<p>${text}</p>`;
}
