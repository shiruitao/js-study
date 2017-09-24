/**
 * 2017-9-24   Shi Ruitao
 */

'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/home', 'home.index1');
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/test', 'home.test');
  app.get('/baidu', 'home.baidu');
  app.get('/lodash', 'home.lodash');
  app.get('/taobao', 'home.taobao');
  app.get('/home1', 'home.home');
  app.get('/github', 'home.git');
  app.post('/find', 'home.findIndex');
  app.post('/date', 'home.time');
};
