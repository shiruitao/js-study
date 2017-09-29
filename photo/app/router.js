/**
 * 2017-9-29 Shi Ruitao
 */
'use strict';

module.exports = app => {
  app.post('/user/register', 'user.register');
  app.post('/user/login', 'user.login');

  app.post('/mobile/set', 'mobile.mobileSet');
  app.post('/mobile/modify', 'mobile.mobileModify');

  app.post('/photo/vote', 'photo.vote');
  app.post('/photo/upload', 'photo.upload');
  app.post('/photo/show', 'photo.show');

};
