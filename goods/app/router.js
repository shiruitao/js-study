/**
 * 2017-9-27   Shi Ruitao
 */
'use strict';

module.exports = app => {

  app.post('/create', 'home.create');
  app.post('/delete', 'home.delete');
  app.post('/get', 'home.get');
  app.post('/update', 'home.update');

  app.post('/create1', 'home.create1');
  app.post('/delete1', 'home.delete1');
  app.post('/get1', 'home.get1');
  app.post('/update1', 'home.update1');
};
