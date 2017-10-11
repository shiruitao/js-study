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
      solidhe: 'white'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImdpZnQiLCJsaWtlIiwiZmluaXNoIiwic2VsZiIsImdpcmwiLCJzaXN0ZXIiLCJtb20iLCJlbGRlciIsImNvbGxlYWd1ZSIsInNpc3QiLCJwYXJlbnQiLCJjb2xvciIsImNvbG9yc2hlIiwic29saWRzaGUiLCJzb2xpZGhlIiwibWV0aG9kcyIsInNoZSIsImhlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxZQUFNLGlCQUZEO0FBR0xDLFlBQU0saUJBSEQ7QUFJTEMsY0FBUSxpQkFKSDtBQUtMQyxZQUFNLGlCQUxEO0FBTUxDLFlBQU0saUJBTkQ7QUFPTEMsY0FBUSxpQkFQSDtBQVFMQyxXQUFLLGlCQVJBO0FBU0xDLGFBQU8saUJBVEY7QUFVTEMsaUJBQVcsaUJBVk47QUFXTEMsWUFBTSxPQVhEO0FBWUxDLGNBQVEsSUFaSDtBQWFMQyxhQUFPLEVBYkY7QUFjTEMsZ0JBQVUsS0FkTDtBQWVMQyxnQkFBVSxLQWZMO0FBZ0JMQyxlQUFTO0FBaEJKLEssUUFrQlBDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osWUFBSWIsT0FBTyxJQUFYO0FBQ0FBLGFBQUtNLElBQUwsR0FBWSxPQUFaO0FBQ0FOLGFBQUtPLE1BQUwsR0FBYyxJQUFkO0FBQ0FQLGFBQUtFLE1BQUwsR0FBYyxpQkFBZDtBQUNBRixhQUFLRyxHQUFMLEdBQVcsaUJBQVg7QUFDQUgsYUFBS1MsUUFBTCxHQUFnQixLQUFoQjtBQUNBVCxhQUFLVSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0FWLGFBQUtXLE9BQUwsR0FBZSxPQUFmO0FBQ0FYLGFBQUtRLEtBQUwsR0FBYSxPQUFiO0FBQ0QsT0FYTztBQVlSTSxRQVpRLGdCQVlIO0FBQ0gsWUFBSWQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtNLElBQUwsR0FBWSxPQUFaO0FBQ0FOLGFBQUtPLE1BQUwsR0FBYyxJQUFkO0FBQ0FQLGFBQUtFLE1BQUwsR0FBYyxpQkFBZDtBQUNBRixhQUFLRyxHQUFMLEdBQVcsaUJBQVg7QUFDQUgsYUFBS1EsS0FBTCxHQUFhLEtBQWI7QUFDQVIsYUFBS1csT0FBTCxHQUFlLEtBQWY7QUFDQVgsYUFBS1UsUUFBTCxHQUFnQixPQUFoQjtBQUNBVixhQUFLUyxRQUFMLEdBQWdCLE9BQWhCO0FBQ0Q7QUF0Qk8sSzs7Ozs7NkJBd0JELENBQUc7Ozs7RUE5Q3FCLGVBQUtNLEk7O2tCQUFuQnZCLEsiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnpLznianor7QnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGdpZnQ6ICcuLi9pbWFnZS/kurrlpLQuc3ZnJyxcbiAgICBsaWtlOiAnLi4vaW1hZ2Uv56S85YyFLnN2ZycsXG4gICAgZmluaXNoOiAnLi4vaW1hZ2Uv5a6M5oiQLnN2ZycsXG4gICAgc2VsZjogJy4uL2ltYWdlL+ebuOacui5zdmcnLFxuICAgIGdpcmw6ICcuLi9pbWFnZS/miJLmjIcuc3ZnJyxcbiAgICBzaXN0ZXI6ICcuLi9pbWFnZS/lj6PnuqIuc3ZnJyxcbiAgICBtb206ICcuLi9pbWFnZS/oirHmnZ8uc3ZnJyxcbiAgICBlbGRlcjogJy4uL2ltYWdlL+mVv+i+iC5zdmcnLFxuICAgIGNvbGxlYWd1ZTogJy4uL2ltYWdlL+mSseWMhS5zdmcnLFxuICAgIHNpc3Q6ICflp5Dlprkv6Ze66JycJyxcbiAgICBwYXJlbnQ6ICflpojlpognLFxuICAgIGNvbG9yOiAnJyxcbiAgICBjb2xvcnNoZTogJ3JlZCcsXG4gICAgc29saWRzaGU6ICdyZWQnLFxuICAgIHNvbGlkaGU6ICd3aGl0ZSdcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNoZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5zaXN0ID0gJ+WnkOWmuS/pl7ronJwnXG4gICAgICBzZWxmLnBhcmVudCA9ICflpojlpognXG4gICAgICBzZWxmLnNpc3RlciA9ICcuLi9pbWFnZS/lj6PnuqIuc3ZnJ1xuICAgICAgc2VsZi5tb20gPSAnLi4vaW1hZ2Uv6Iqx5p2fLnN2ZydcbiAgICAgIHNlbGYuY29sb3JzaGUgPSAncmVkJ1xuICAgICAgc2VsZi5zb2xpZHNoZSA9ICdyZWQnXG4gICAgICBzZWxmLnNvbGlkaGUgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yID0gJ2JsYWNrJ1xuICAgIH0sXG4gICAgaGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc2lzdCA9ICflhYTlvJ8v5Z+65Y+LJ1xuICAgICAgc2VsZi5wYXJlbnQgPSAn54i454i4J1xuICAgICAgc2VsZi5zaXN0ZXIgPSAnLi4vaW1hZ2Uv5omL6KGoLnN2ZydcbiAgICAgIHNlbGYubW9tID0gJy4uL2ltYWdlL+ecvOmVnC5zdmcnXG4gICAgICBzZWxmLmNvbG9yID0gJ3JlZCdcbiAgICAgIHNlbGYuc29saWRoZSA9ICdyZWQnXG4gICAgICBzZWxmLnNvbGlkc2hlID0gJ3doaXRlJ1xuICAgICAgc2VsZi5jb2xvcnNoZSA9ICdibGFjaydcbiAgICB9XG4gIH1cbiAgb25sb2FkKCkgeyB9XG59XG4iXX0=