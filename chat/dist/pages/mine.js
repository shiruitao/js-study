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
        _wepy2.default.request({
          url: 'http://127.0.0.1:8080/graduation/student/get',
          method: 'GET',
          success: function success(res) {
            self.commodity = res.data;
            self.setData({
              commodity: res.data
            });
            console.log(res.data.data, 'res.data');
          }
        });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBob3RvcG9zdGVyIiwicGhvdG9ob21lIiwicGhvdG9zaG9wIiwicGhvdG9teSIsImhvbWVjb2xvciIsInNob3Bjb2xvciIsIm15Y29sb3IiLCJ0aXRsZWhvbWUiLCJ0aXRsZXNob3AiLCJ0aXRsZW15IiwibWV0aG9kcyIsImhvbWV0YXAiLCJzZWxmIiwic2hvcHRhcCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwiY29tbW9kaXR5Iiwic2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJteXRhcCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsbUJBQWEsc0JBRFI7QUFFTEMsaUJBQVcsb0JBRk47QUFHTEMsaUJBQVcsb0JBSE47QUFJTEMsZUFBUyxrQkFKSjtBQUtMQyxpQkFBVyxLQUxOO0FBTUxDLGlCQUFXLEVBTk47QUFPTEMsZUFBUyxFQVBKO0FBUUxDLGlCQUFXLElBUk47QUFTTEMsaUJBQVcsS0FUTjtBQVVMQyxlQUFTO0FBVkosSyxRQVlQQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLUixTQUFMLEdBQWlCLEtBQWpCO0FBQ0FRLGFBQUtQLFNBQUwsR0FBaUIsT0FBakI7QUFDQU8sYUFBS04sT0FBTCxHQUFlLE9BQWY7QUFDRCxPQU5PO0FBT1JPLGFBUFEscUJBT0U7QUFDUixZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS1IsU0FBTCxHQUFpQixPQUFqQjtBQUNBUSxhQUFLUCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0FPLGFBQUtOLE9BQUwsR0FBZSxPQUFmO0FBQ0EsdUJBQUtRLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLDhDQURNO0FBRVhDLGtCQUFRLEtBRkc7QUFHWEMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQk4saUJBQUtPLFNBQUwsR0FBaUJELElBQUluQixJQUFyQjtBQUNBYSxpQkFBS1EsT0FBTCxDQUFhO0FBQ1hELHlCQUFXRCxJQUFJbkI7QUFESixhQUFiO0FBR0FzQixvQkFBUUMsR0FBUixDQUFZSixJQUFJbkIsSUFBSixDQUFTQSxJQUFyQixFQUEyQixVQUEzQjtBQUNEO0FBVFUsU0FBYjtBQVdELE9BdkJPO0FBd0JSd0IsV0F4QlEsbUJBd0JBO0FBQ04sWUFBSVgsT0FBTyxJQUFYO0FBQ0FBLGFBQUtSLFNBQUwsR0FBaUIsT0FBakI7QUFDQVEsYUFBS1AsU0FBTCxHQUFpQixPQUFqQjtBQUNBTyxhQUFLTixPQUFMLEdBQWUsS0FBZjtBQUNEO0FBN0JPLEs7Ozs7RUFoQnVCLGVBQUtrQixJOztrQkFBbkI1QixLIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LaF5biCJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgcGhvdG9wb3N0ZXI6ICcuLi9pbWFnZXMvcG9zdGVyLmpwZycsXG4gICAgcGhvdG9ob21lOiAnLi4vaW1hZ2VzL2hvbWUucG5nJyxcbiAgICBwaG90b3Nob3A6ICcuLi9pbWFnZXMvc2hvcC5wbmcnLFxuICAgIHBob3RvbXk6ICcuLi9pbWFnZXMvbXkuc3ZnJyxcbiAgICBob21lY29sb3I6ICdyZWQnLFxuICAgIHNob3Bjb2xvcjogJycsXG4gICAgbXljb2xvcjogJycsXG4gICAgdGl0bGVob21lOiAn6aaW6aG1JyxcbiAgICB0aXRsZXNob3A6ICfotK3nianovaYnLFxuICAgIHRpdGxlbXk6ICfmiJHnmoQnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBob21ldGFwKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmhvbWVjb2xvciA9ICdyZWQnXG4gICAgICBzZWxmLnNob3Bjb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYubXljb2xvciA9ICdibGFjaydcbiAgICB9LFxuICAgIHNob3B0YXAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuaG9tZWNvbG9yID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5zaG9wY29sb3IgPSAncmVkJ1xuICAgICAgc2VsZi5teWNvbG9yID0gJ2JsYWNrJ1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo4MDgwL2dyYWR1YXRpb24vc3R1ZGVudC9nZXQnLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZWxmLmNvbW1vZGl0eSA9IHJlcy5kYXRhXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIGNvbW1vZGl0eTogcmVzLmRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEsICdyZXMuZGF0YScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBteXRhcCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5ob21lY29sb3IgPSAnYmxhY2snXG4gICAgICBzZWxmLnNob3Bjb2xvciA9ICdibGFjaydcbiAgICAgIHNlbGYubXljb2xvciA9ICdyZWQnXG4gICAgfVxuICB9XG59XG4iXX0=