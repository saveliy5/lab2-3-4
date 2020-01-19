import articleConstructor from './articleConstructor';

test('link parameters are passed correctly', () => {
  const article = articleConstructor({
    title: 'title',
    fullurl: 'https://url/'
  });
  const el = article.querySelector(':nth-child(1)');
  expect(el.textContent).toBe('title');
  expect(el.href).toBe('https://url/');
});

test('id parameter is passed correctly', () => {
  const article = articleConstructor({
    pageid: 1
  });
  const el = article.querySelector(':nth-child(2)');
  expect(el.textContent).toBe('Id: 1');
});

test('language parameter is passed correctly', () => {
  const article = articleConstructor({
    pagelanguage: 'ru'
  });
  const el = article.querySelector(':nth-child(3)');
  expect(el.textContent).toBe('Язык: ru');
});

test('length parameter is passed correctly', () => {
  const article = articleConstructor({
    length: 100
  });
  const el = article.querySelector(':nth-child(4)');
  expect(el.textContent).toBe('Длина: 100');
});

test('touched parameter is passed correctly', () => {
  const article = articleConstructor({
    touched: '2019-12-31'
  });
  const el = article.querySelector(':nth-child(5)');
  expect(el.textContent).toBe('Изменено: 2019-12-31');
});
