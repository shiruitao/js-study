'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '礼物说'
    }, _this.data = {
      src: '',
      gift: '../image/人头.svg',
      like: '../image/礼包.svg',
      finish: '../image/完成.svg',
      self: '../image/相机.svg',
      girl: '../image/戒指.svg',
      sister: '../image/口红.svg',
      mom: '../image/花束.svg',
      elder: '../image/长辈.svg',
      colleague: '../image/钱包.svg',
      sist: '姐妹/闺蜜',
      parent: '妈妈',
      color: '',
      colorshe: 'red',
      solidshe: 'red',
      solidhe: 'white',
      wife: '老婆/女票'
    }, _this.methods = {
      she: function she() {
        var self = this;
        self.sist = '姐妹/闺蜜';
        self.parent = '妈妈';
        self.sister = '../image/口红.svg';
        self.mom = '../image/花束.svg';
        self.colorshe = 'red';
        self.solidshe = 'red';
        self.solidhe = 'white';
        self.color = 'black';
        self.wife = '老婆/女票';
      },
      he: function he() {
        var self = this;
        self.sist = '兄弟/基友';
        self.parent = '爸爸';
        self.sister = '../image/手表.svg';
        self.mom = '../image/眼镜.svg';
        self.color = 'red';
        self.solidhe = 'red';
        self.solidshe = 'white';
        self.colorshe = 'black';
        self.wife = '老公/男票';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onload',
    value: function onload() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImdpZnQiLCJsaWtlIiwiZmluaXNoIiwic2VsZiIsImdpcmwiLCJzaXN0ZXIiLCJtb20iLCJlbGRlciIsImNvbGxlYWd1ZSIsInNpc3QiLCJwYXJlbnQiLCJjb2xvciIsImNvbG9yc2hlIiwic29saWRzaGUiLCJzb2xpZGhlIiwid2lmZSIsIm1ldGhvZHMiLCJzaGUiLCJoZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsWUFBTSxpQkFGRDtBQUdMQyxZQUFNLGlCQUhEO0FBSUxDLGNBQVEsaUJBSkg7QUFLTEMsWUFBTSxpQkFMRDtBQU1MQyxZQUFNLGlCQU5EO0FBT0xDLGNBQVEsaUJBUEg7QUFRTEMsV0FBSyxpQkFSQTtBQVNMQyxhQUFPLGlCQVRGO0FBVUxDLGlCQUFXLGlCQVZOO0FBV0xDLFlBQU0sT0FYRDtBQVlMQyxjQUFRLElBWkg7QUFhTEMsYUFBTyxFQWJGO0FBY0xDLGdCQUFVLEtBZEw7QUFlTEMsZ0JBQVUsS0FmTDtBQWdCTEMsZUFBUyxPQWhCSjtBQWlCTEMsWUFBTTtBQWpCRCxLLFFBbUJQQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKLFlBQUlkLE9BQU8sSUFBWDtBQUNBQSxhQUFLTSxJQUFMLEdBQVksT0FBWjtBQUNBTixhQUFLTyxNQUFMLEdBQWMsSUFBZDtBQUNBUCxhQUFLRSxNQUFMLEdBQWMsaUJBQWQ7QUFDQUYsYUFBS0csR0FBTCxHQUFXLGlCQUFYO0FBQ0FILGFBQUtTLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQVQsYUFBS1UsUUFBTCxHQUFnQixLQUFoQjtBQUNBVixhQUFLVyxPQUFMLEdBQWUsT0FBZjtBQUNBWCxhQUFLUSxLQUFMLEdBQWEsT0FBYjtBQUNBUixhQUFLWSxJQUFMLEdBQVksT0FBWjtBQUNELE9BWk87QUFhUkcsUUFiUSxnQkFhSDtBQUNILFlBQUlmLE9BQU8sSUFBWDtBQUNBQSxhQUFLTSxJQUFMLEdBQVksT0FBWjtBQUNBTixhQUFLTyxNQUFMLEdBQWMsSUFBZDtBQUNBUCxhQUFLRSxNQUFMLEdBQWMsaUJBQWQ7QUFDQUYsYUFBS0csR0FBTCxHQUFXLGlCQUFYO0FBQ0FILGFBQUtRLEtBQUwsR0FBYSxLQUFiO0FBQ0FSLGFBQUtXLE9BQUwsR0FBZSxLQUFmO0FBQ0FYLGFBQUtVLFFBQUwsR0FBZ0IsT0FBaEI7QUFDQVYsYUFBS1MsUUFBTCxHQUFnQixPQUFoQjtBQUNBVCxhQUFLWSxJQUFMLEdBQVksT0FBWjtBQUNEO0FBeEJPLEs7Ozs7OzZCQTBCRCxDQUFHOzs7O0VBakRxQixlQUFLSSxJOztrQkFBbkJ4QixLIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56S854mp6K+0J1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBnaWZ0OiAnLi4vaW1hZ2Uv5Lq65aS0LnN2ZycsXG4gICAgbGlrZTogJy4uL2ltYWdlL+ekvOWMhS5zdmcnLFxuICAgIGZpbmlzaDogJy4uL2ltYWdlL+WujOaIkC5zdmcnLFxuICAgIHNlbGY6ICcuLi9pbWFnZS/nm7jmnLouc3ZnJyxcbiAgICBnaXJsOiAnLi4vaW1hZ2Uv5oiS5oyHLnN2ZycsXG4gICAgc2lzdGVyOiAnLi4vaW1hZ2Uv5Y+j57qiLnN2ZycsXG4gICAgbW9tOiAnLi4vaW1hZ2Uv6Iqx5p2fLnN2ZycsXG4gICAgZWxkZXI6ICcuLi9pbWFnZS/plb/ovoguc3ZnJyxcbiAgICBjb2xsZWFndWU6ICcuLi9pbWFnZS/pkrHljIUuc3ZnJyxcbiAgICBzaXN0OiAn5aeQ5aa5L+mXuuicnCcsXG4gICAgcGFyZW50OiAn5aaI5aaIJyxcbiAgICBjb2xvcjogJycsXG4gICAgY29sb3JzaGU6ICdyZWQnLFxuICAgIHNvbGlkc2hlOiAncmVkJyxcbiAgICBzb2xpZGhlOiAnd2hpdGUnLFxuICAgIHdpZmU6ICfogIHlqYYv5aWz56WoJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2hlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNpc3QgPSAn5aeQ5aa5L+mXuuicnCdcbiAgICAgIHNlbGYucGFyZW50ID0gJ+WmiOWmiCdcbiAgICAgIHNlbGYuc2lzdGVyID0gJy4uL2ltYWdlL+WPo+e6oi5zdmcnXG4gICAgICBzZWxmLm1vbSA9ICcuLi9pbWFnZS/oirHmnZ8uc3ZnJ1xuICAgICAgc2VsZi5jb2xvcnNoZSA9ICdyZWQnXG4gICAgICBzZWxmLnNvbGlkc2hlID0gJ3JlZCdcbiAgICAgIHNlbGYuc29saWRoZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLndpZmUgPSAn6ICB5amGL+Wls+elqCdcbiAgICB9LFxuICAgIGhlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNpc3QgPSAn5YWE5byfL+WfuuWPiydcbiAgICAgIHNlbGYucGFyZW50ID0gJ+eIuOeIuCdcbiAgICAgIHNlbGYuc2lzdGVyID0gJy4uL2ltYWdlL+aJi+ihqC5zdmcnXG4gICAgICBzZWxmLm1vbSA9ICcuLi9pbWFnZS/nnLzplZwuc3ZnJ1xuICAgICAgc2VsZi5jb2xvciA9ICdyZWQnXG4gICAgICBzZWxmLnNvbGlkaGUgPSAncmVkJ1xuICAgICAgc2VsZi5zb2xpZHNoZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3JzaGUgPSAnYmxhY2snXG4gICAgICBzZWxmLndpZmUgPSAn6ICB5YWsL+eUt+elqCdcbiAgICB9XG4gIH1cbiAgb25sb2FkKCkgeyB9XG59XG4iXX0=