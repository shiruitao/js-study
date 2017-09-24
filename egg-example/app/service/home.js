/**
 * 2017-9-24   Shi Ruitao
 */
'use strict';

module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'Shi';
    }
    * taobao() {
      return yield app.curl('http://taobao.com');
    }
    * sina() {
      return yield app.curl('http://www.sina.com.cn');
    }
    * sohu() {
      return yield app.curl('http://www.sohu.com.cn');
    }
    * baidu() {
      return yield app.curl('http://www.baidu.com');
    }
    * test() {
      return 'home.test';
    }
    * time() {
      const t = new Date();
      return `${t.getFullYear()}-${this.format(t.getMonth() + 1)}-${this.format(t.getDate())} ${this.format(t.getHours())}:${this.format(t.getMinutes())}:${this.format(t.getSeconds())}`;
    }
    format(a) {
      if (a < 10) {
        return '0' + a;
      }
      return a;
    }
  }
  return Home;
};
