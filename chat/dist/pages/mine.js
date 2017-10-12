'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      navigationBarTitleText: '超市'
    }, _this.data = {
      photoposter: '../images/poster.jpg',
      photohome: '../images/home.png',
      photoshop: '../images/shop.png',
      photomy: '../images/my.svg',
      homecolor: 'red',
      shopcolor: '',
      mycolor: '',
      titlehome: '首页',
      titleshop: '购物车',
      titlemy: '我的'
    }, _this.methods = {
      hometap: function hometap() {
        var self = this;
        self.homecolor = 'red';
        self.shopcolor = 'black';
        self.mycolor = 'black';
      },
      shoptap: function shoptap() {
        var self = this;
        self.homecolor = 'black';
        self.shopcolor = 'red';
        self.mycolor = 'black';
      },
      mytap: function mytap() {
        var self = this;
        self.homecolor = 'black';
        self.shopcolor = 'black';
        self.mycolor = 'red';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwicGhvdG9ob21lIiwicGhvdG9zaG9wIiwicGhvdG9teSIsImhvbWVjb2xvciIsInNob3Bjb2xvciIsIm15Y29sb3IiLCJ0aXRsZWhvbWUiLCJ0aXRsZXNob3AiLCJ0aXRsZW15IiwibWV0aG9kcyIsImhvbWV0YXAiLCJzZWxmIiwic2hvcHRhcCIsIm15dGFwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxtQkFBYSxzQkFEUjtBQUVMQyxpQkFBVyxvQkFGTjtBQUdMQyxpQkFBVyxvQkFITjtBQUlMQyxlQUFTLGtCQUpKO0FBS0xDLGlCQUFXLEtBTE47QUFNTEMsaUJBQVcsRUFOTjtBQU9MQyxlQUFTLEVBUEo7QUFRTEMsaUJBQVcsSUFSTjtBQVNMQyxpQkFBVyxLQVROO0FBVUxDLGVBQVM7QUFWSixLLFFBWVBDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtSLFNBQUwsR0FBaUIsS0FBakI7QUFDQVEsYUFBS1AsU0FBTCxHQUFpQixPQUFqQjtBQUNBTyxhQUFLTixPQUFMLEdBQWUsT0FBZjtBQUNELE9BTk87QUFPUk8sYUFQUSxxQkFPRTtBQUNSLFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLUixTQUFMLEdBQWlCLE9BQWpCO0FBQ0FRLGFBQUtQLFNBQUwsR0FBaUIsS0FBakI7QUFDQU8sYUFBS04sT0FBTCxHQUFlLE9BQWY7QUFDRCxPQVpPO0FBYVJRLFdBYlEsbUJBYUE7QUFDTixZQUFJRixPQUFPLElBQVg7QUFDQUEsYUFBS1IsU0FBTCxHQUFpQixPQUFqQjtBQUNBUSxhQUFLUCxTQUFMLEdBQWlCLE9BQWpCO0FBQ0FPLGFBQUtOLE9BQUwsR0FBZSxLQUFmO0FBQ0Q7QUFsQk8sSzs7OztFQWhCdUIsZUFBS1MsSTs7a0JBQW5CbkIsSyIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i2heW4gidcbiAgfVxuICBkYXRhID0ge1xuICAgIHBob3RvcG9zdGVyOiAnLi4vaW1hZ2VzL3Bvc3Rlci5qcGcnLFxuICAgIHBob3RvaG9tZTogJy4uL2ltYWdlcy9ob21lLnBuZycsXG4gICAgcGhvdG9zaG9wOiAnLi4vaW1hZ2VzL3Nob3AucG5nJyxcbiAgICBwaG90b215OiAnLi4vaW1hZ2VzL215LnN2ZycsXG4gICAgaG9tZWNvbG9yOiAncmVkJyxcbiAgICBzaG9wY29sb3I6ICcnLFxuICAgIG15Y29sb3I6ICcnLFxuICAgIHRpdGxlaG9tZTogJ+mmlumhtScsXG4gICAgdGl0bGVzaG9wOiAn6LSt54mp6L2mJyxcbiAgICB0aXRsZW15OiAn5oiR55qEJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaG9tZXRhcCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5ob21lY29sb3IgPSAncmVkJ1xuICAgICAgc2VsZi5zaG9wY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLm15Y29sb3IgPSAnYmxhY2snXG4gICAgfSxcbiAgICBzaG9wdGFwKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmhvbWVjb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYuc2hvcGNvbG9yID0gJ3JlZCdcbiAgICAgIHNlbGYubXljb2xvciA9ICdibGFjaydcbiAgICB9LFxuICAgIG15dGFwKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmhvbWVjb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYuc2hvcGNvbG9yID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5teWNvbG9yID0gJ3JlZCdcbiAgICB9XG4gIH1cbn1cbiJdfQ==