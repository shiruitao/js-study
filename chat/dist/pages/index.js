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
      navigationBarTitleText: 'chat'
    }, _this.data = {
      age: 18,
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }],
      inputValue: 1
      // check(e) {
      //   console.log('checkbox发生change事件，携带value值为：', e.detail.value)
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'formSubmit',
    value: function formSubmit(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    }
  }, {
    key: 'formReset',
    value: function formReset() {
      console.log('form发生了reset事件');
    }
  }, {
    key: 'onTap',
    value: function onTap() {
      var self = this;
      self.age++;
    }
  }, {
    key: 'bindButtonTap',
    value: function bindButtonTap() {
      this.setData({
        focus: true
      });
    }
  }, {
    key: 'bindKeyInput',
    value: function bindKeyInput(e) {
      var self = this;
      self.inputValue = e.detail.value;
      console.log(self.inputValue);
    }
  }, {
    key: 'bindReplaceInput',
    value: function bindReplaceInput(e) {
      var value = e.detail.value;
      var pos = e.detail.cursor;
      if (pos !== -1) {
        // 光标在中间
        var left = e.detail.value.slice(0, pos);
        // 计算光标的位置
        pos = left.replace(/11/g, '2').length;
      }

      // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
      return {
        value: value.replace(/11/g, '2'),
        cursor: pos

        // 或者直接返回字符串,光标在最后边
        // return value.replace(/11/g,'2'),
      };
    }
  }, {
    key: 'noLoad',
    value: function noLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhZ2UiLCJpdGVtcyIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJpbnB1dFZhbHVlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJzZWxmIiwic2V0RGF0YSIsImZvY3VzIiwicG9zIiwiY3Vyc29yIiwibGVmdCIsInNsaWNlIiwicmVwbGFjZSIsImxlbmd0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsYUFBTyxDQUNMLEVBQUVDLE1BQU0sS0FBUixFQUFlQyxPQUFPLElBQXRCLEVBREssRUFFTCxFQUFFRCxNQUFNLEtBQVIsRUFBZUMsT0FBTyxJQUF0QixFQUE0QkMsU0FBUyxNQUFyQyxFQUZLLEVBR0wsRUFBRUYsTUFBTSxLQUFSLEVBQWVDLE9BQU8sSUFBdEIsRUFISyxFQUlMLEVBQUVELE1BQU0sS0FBUixFQUFlQyxPQUFPLElBQXRCLEVBSkssRUFLTCxFQUFFRCxNQUFNLEtBQVIsRUFBZUMsT0FBTyxJQUF0QixFQUxLLEVBTUwsRUFBRUQsTUFBTSxLQUFSLEVBQWVDLE9BQU8sSUFBdEIsRUFOSyxDQUZGO0FBVUxFLGtCQUFZO0FBRWQ7QUFDQTtBQUNBOztBQWRPLEs7Ozs7OytCQWdCSUMsQyxFQUFHO0FBQ1pDLGNBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ0YsRUFBRUcsTUFBRixDQUFTTixLQUEvQztBQUNEOzs7Z0NBQ1c7QUFDVkksY0FBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLFVBQUlFLE9BQU8sSUFBWDtBQUNBQSxXQUFLVixHQUFMO0FBQ0Q7OztvQ0FDZTtBQUNkLFdBQUtXLE9BQUwsQ0FBYTtBQUNYQyxlQUFPO0FBREksT0FBYjtBQUdEOzs7aUNBQ1lOLEMsRUFBRztBQUNkLFVBQUlJLE9BQU8sSUFBWDtBQUNBQSxXQUFLTCxVQUFMLEdBQWtCQyxFQUFFRyxNQUFGLENBQVNOLEtBQTNCO0FBQ0FJLGNBQVFDLEdBQVIsQ0FBWUUsS0FBS0wsVUFBakI7QUFDRDs7O3FDQUNnQkMsQyxFQUFHO0FBQ2xCLFVBQUlILFFBQVFHLEVBQUVHLE1BQUYsQ0FBU04sS0FBckI7QUFDQSxVQUFJVSxNQUFNUCxFQUFFRyxNQUFGLENBQVNLLE1BQW5CO0FBQ0EsVUFBSUQsUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDZDtBQUNBLFlBQUlFLE9BQU9ULEVBQUVHLE1BQUYsQ0FBU04sS0FBVCxDQUFlYSxLQUFmLENBQXFCLENBQXJCLEVBQXdCSCxHQUF4QixDQUFYO0FBQ0E7QUFDQUEsY0FBTUUsS0FBS0UsT0FBTCxDQUFhLEtBQWIsRUFBb0IsR0FBcEIsRUFBeUJDLE1BQS9CO0FBQ0Q7O0FBRUQ7QUFDQSxhQUFPO0FBQ0xmLGVBQU9BLE1BQU1jLE9BQU4sQ0FBYyxLQUFkLEVBQXFCLEdBQXJCLENBREY7QUFFTEgsZ0JBQVFEOztBQUdWO0FBQ0E7QUFOTyxPQUFQO0FBT0Q7Ozs2QkFFUSxDQUFHOzs7O0VBN0RxQixlQUFLTSxJOztrQkFBbkJ2QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ2NoYXQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhZ2U6IDE4LFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IG5hbWU6ICdVU0EnLCB2YWx1ZTogJ+e+juWbvScgfSxcbiAgICAgIHsgbmFtZTogJ0NITicsIHZhbHVlOiAn5Lit5Zu9JywgY2hlY2tlZDogJ3RydWUnIH0sXG4gICAgICB7IG5hbWU6ICdCUkEnLCB2YWx1ZTogJ+W3tOilvycgfSxcbiAgICAgIHsgbmFtZTogJ0pQTicsIHZhbHVlOiAn5pel5pysJyB9LFxuICAgICAgeyBuYW1lOiAnRU5HJywgdmFsdWU6ICfoi7Hlm70nIH0sXG4gICAgICB7IG5hbWU6ICdUVVInLCB2YWx1ZTogJ+azleWbvScgfVxuICAgIF0sXG4gICAgaW5wdXRWYWx1ZTogMVxuICB9XG4gIC8vIGNoZWNrKGUpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnY2hlY2tib3jlj5HnlJ9jaGFuZ2Xkuovku7bvvIzmkLrluKZ2YWx1ZeWAvOS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAvLyB9XG5cbiAgZm9ybVN1Ym1pdChlKSB7XG4gICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgfVxuICBmb3JtUmVzZXQoKSB7XG4gICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZyZXNldOS6i+S7ticpXG4gIH1cblxuICBvblRhcCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmFnZSsrXG4gIH1cbiAgYmluZEJ1dHRvblRhcCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZm9jdXM6IHRydWVcbiAgICB9KVxuICB9XG4gIGJpbmRLZXlJbnB1dChlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5pbnB1dFZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICBjb25zb2xlLmxvZyhzZWxmLmlucHV0VmFsdWUpXG4gIH1cbiAgYmluZFJlcGxhY2VJbnB1dChlKSB7XG4gICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICB2YXIgcG9zID0gZS5kZXRhaWwuY3Vyc29yXG4gICAgaWYgKHBvcyAhPT0gLTEpIHtcbiAgICAgIC8vIOWFieagh+WcqOS4remXtFxuICAgICAgdmFyIGxlZnQgPSBlLmRldGFpbC52YWx1ZS5zbGljZSgwLCBwb3MpXG4gICAgICAvLyDorqHnrpflhYnmoIfnmoTkvY3nva5cbiAgICAgIHBvcyA9IGxlZnQucmVwbGFjZSgvMTEvZywgJzInKS5sZW5ndGhcbiAgICB9XG5cbiAgICAvLyDnm7TmjqXov5Tlm57lr7nosaHvvIzlj6/ku6Xlr7novpPlhaXov5vooYzov4fmu6TlpITnkIbvvIzlkIzml7blj6/ku6XmjqfliLblhYnmoIfnmoTkvY3nva5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLnJlcGxhY2UoLzExL2csICcyJyksXG4gICAgICBjdXJzb3I6IHBvc1xuICAgIH1cblxuICAgIC8vIOaIluiAheebtOaOpei/lOWbnuWtl+espuS4sizlhYnmoIflnKjmnIDlkI7ovrlcbiAgICAvLyByZXR1cm4gdmFsdWUucmVwbGFjZSgvMTEvZywnMicpLFxuICB9XG5cbiAgbm9Mb2FkKCkgeyB9XG59XG5cbiJdfQ==