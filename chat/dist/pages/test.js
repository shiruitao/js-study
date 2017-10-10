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
      colleague: '../image/钱包.svg'

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsImdpZnQiLCJsaWtlIiwiZmluaXNoIiwic2VsZiIsImdpcmwiLCJzaXN0ZXIiLCJtb20iLCJlbGRlciIsImNvbGxlYWd1ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFlBQU0saUJBRkQ7QUFHTEMsWUFBTSxpQkFIRDtBQUlMQyxjQUFRLGlCQUpIO0FBS0xDLFlBQU0saUJBTEQ7QUFNTEMsWUFBTSxpQkFORDtBQU9MQyxjQUFRLGlCQVBIO0FBUUxDLFdBQUssaUJBUkE7QUFTTEMsYUFBTyxpQkFURjtBQVVMQyxpQkFBVzs7QUFWTixLOzs7O0VBSjBCLGVBQUtDLEk7O2tCQUFuQmQsSyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ekvOeJqeivtCdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgZ2lmdDogJy4uL2ltYWdlL+S6uuWktC5zdmcnLFxuICAgIGxpa2U6ICcuLi9pbWFnZS/npLzljIUuc3ZnJyxcbiAgICBmaW5pc2g6ICcuLi9pbWFnZS/lrozmiJAuc3ZnJyxcbiAgICBzZWxmOiAnLi4vaW1hZ2Uv55u45py6LnN2ZycsXG4gICAgZ2lybDogJy4uL2ltYWdlL+aIkuaMhy5zdmcnLFxuICAgIHNpc3RlcjogJy4uL2ltYWdlL+WPo+e6oi5zdmcnLFxuICAgIG1vbTogJy4uL2ltYWdlL+iKseadny5zdmcnLFxuICAgIGVsZGVyOiAnLi4vaW1hZ2Uv6ZW/6L6ILnN2ZycsXG4gICAgY29sbGVhZ3VlOiAnLi4vaW1hZ2Uv6ZKx5YyFLnN2ZydcblxuICB9XG59XG4iXX0=