import articleConstructor from './articleConstructor';
import api from './api';

import './index.css';

const root = document.getElementById('root');

let url = 'https://en.wikipedia.org/w/api.php?origin=*';

let articlesInfo = [];

api().then(json => {
  Object.values(json.query.pages).forEach(props => {
    articlesInfo.push(articleConstructor(props));
  });

  let ul = document.createElement('ul');
  articlesInfo.forEach(articleInfo => {
    ul.append(articleInfo);
  });
  root.append(ul);
});
