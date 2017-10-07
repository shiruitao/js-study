'use strict';

module.exports = app => {
  app.post('/create', 'home.create');
  app.post('/delete', 'home.delete');
  app.post('/get', 'home.get');
  app.post('/update', 'home.update');
};
