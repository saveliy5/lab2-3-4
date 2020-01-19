const articleConstructor = ({
  title,
  fullurl,
  pageid,
  pagelanguage,
  length,
  touched
}) => {
  let li = document.createElement('li');
  li.className = 'article';
  li.innerHTML = `
    <a href="${fullurl}">${title}</a>
    <span>Id: ${pageid}</span>
    <span>Язык: ${pagelanguage}</span>
    <span>Длина: ${length}</span>
    <span>Изменено: ${touched}</span>
  `;
  return li;
};

export default articleConstructor;
