/**
 * 2017-9-24   Shi Ruitao
 */

'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/home', 'home.index1');
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/baidu', 'home.baidu');
  app.get('/lodash1', 'home.lodash');
  app.get('/taobao', 'home.taobao');
  app.get('/home1', 'home.home');
  app.get('/github', 'home.git');
  app.post('/find', 'home.findIndex');
  app.post('/date', 'home.time');
  app.get('/lodash', 'lodash.lodash');

  app.post('/create', 'test.create');
  app.post('/delete', 'test.delete');
  app.post('/get', 'test.get');
  app.post('/update', 'test.update');

  app.post('/create1', 'test.create1');
  app.post('/delete1', 'test.delete1');
  app.post('/get1', 'test.get1');
  app.post('/update1', 'test.update1');
};
