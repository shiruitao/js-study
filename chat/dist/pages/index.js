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

var date = new Date();
var years = [];
var months = [];
var days = [];

for (var i = 1990; i <= date.getFullYear(); i++) {
  years.push(i);
}

for (var _i = 1; _i <= 12; _i++) {
  months.push(_i);
}

for (var _i2 = 1; _i2 <= 31; _i2++) {
  days.push(_i2);
}

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
      inputValue: 1,
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1],

      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: ''

      // check(e) {
      //   console.log('checkbox发生change事件，携带value值为：', e.detail.value)
      // }
    }, _this.methods = {
      formSubmit: function formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      },
      formReset: function formReset() {
        console.log('form发生了reset事件');
      },
      onTap: function onTap() {
        var self = this;
        self.age++;
      },
      bindButtonTap: function bindButtonTap() {
        this.setData({
          focus: true
        });
      },
      bindKeyInput: function bindKeyInput(e) {
        var self = this;
        self.inputValue = e.detail.value;
        console.log(self.inputValue);
      },
      bindReplaceInput: function bindReplaceInput(e) {
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
      },
      bindButton: function bindButton() {
        var that = this;
        _wepy2.default.chooseVideo({
          sourceType: ['album', 'camera'],
          maxDuration: 60,
          camera: 'back',
          success: function success(res) {
            that.setData({
              src: res.tempFilePath
            });
          }
        });
      },
      bind: function bind() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            self.src = res.tempFilePaths[0];
            self.setData({
              src: res.tempFilePaths[0]
            });
          }
        });
      },

      bindChange: function bindChange(e) {
        var val = e.detail.value;
        this.setData({
          year: this.data.years[val[0]],
          month: this.data.months[val[1]],
          day: this.data.days[val[2]]
        });
      },

      audioPlay: function audioPlay() {
        this.audioCtx.play();
      },
      audioPause: function audioPause() {
        this.audioCtx.pause();
      },
      audio14: function audio14() {
        this.audioCtx.seek(14);
      },
      audioStart: function audioStart() {
        this.audioCtx.seek(0);
      }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onReady',
    value: function onReady(e) {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = _wepy2.default.createAudioContext('myAudio');
    }
  }, {
    key: 'noLoad',
    value: function noLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRhdGUiLCJEYXRlIiwieWVhcnMiLCJtb250aHMiLCJkYXlzIiwiaSIsImdldEZ1bGxZZWFyIiwicHVzaCIsIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhZ2UiLCJpdGVtcyIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJpbnB1dFZhbHVlIiwieWVhciIsIm1vbnRoIiwiZGF5IiwicG9zdGVyIiwiYXV0aG9yIiwic3JjIiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImZvcm1SZXNldCIsIm9uVGFwIiwic2VsZiIsImJpbmRCdXR0b25UYXAiLCJzZXREYXRhIiwiZm9jdXMiLCJiaW5kS2V5SW5wdXQiLCJiaW5kUmVwbGFjZUlucHV0IiwicG9zIiwiY3Vyc29yIiwibGVmdCIsInNsaWNlIiwicmVwbGFjZSIsImxlbmd0aCIsImJpbmRCdXR0b24iLCJ0aGF0IiwiY2hvb3NlVmlkZW8iLCJzb3VyY2VUeXBlIiwibWF4RHVyYXRpb24iLCJjYW1lcmEiLCJzdWNjZXNzIiwicmVzIiwidGVtcEZpbGVQYXRoIiwiYmluZCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInRlbXBGaWxlUGF0aHMiLCJiaW5kQ2hhbmdlIiwidmFsIiwiYXVkaW9QbGF5IiwiYXVkaW9DdHgiLCJwbGF5IiwiYXVkaW9QYXVzZSIsInBhdXNlIiwiYXVkaW8xNCIsInNlZWsiLCJhdWRpb1N0YXJ0IiwiY3JlYXRlQXVkaW9Db250ZXh0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7Ozs7QUFqQkEsSUFBTUEsT0FBTyxJQUFJQyxJQUFKLEVBQWI7QUFDQSxJQUFNQyxRQUFRLEVBQWQ7QUFDQSxJQUFNQyxTQUFTLEVBQWY7QUFDQSxJQUFNQyxPQUFPLEVBQWI7O0FBRUEsS0FBSyxJQUFJQyxJQUFJLElBQWIsRUFB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QWI7QUFLRCxPQTdFTzs7QUErRVJDLGlCQUFXLHFCQUFXO0FBQ3BCLGFBQUtDLFFBQUwsQ0FBY0MsSUFBZDtBQUNELE9BakZPO0FBa0ZSQyxrQkFBWSxzQkFBVztBQUNyQixhQUFLRixRQUFMLENBQWNHLEtBQWQ7QUFDRCxPQXBGTztBQXFGUkMsZUFBUyxtQkFBVztBQUNsQixhQUFLSixRQUFMLENBQWNLLElBQWQsQ0FBbUIsRUFBbkI7QUFDRCxPQXZGTztBQXdGUkMsa0JBQVksc0JBQVc7QUFDckIsYUFBS04sUUFBTCxDQUFjSyxJQUFkLENBQW1CLENBQW5CO0FBQ0Q7O0FBMUZPLEs7Ozs7OzRCQTZGRnhDLEMsRUFBRztBQUNUO0FBQ0EsV0FBS21DLFFBQUwsR0FBZ0IsZUFBS08sa0JBQUwsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDRDs7OzZCQUNRLENBQUc7Ozs7RUFqSXFCLGVBQUtDLEk7O2tCQUFuQjdELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG5jb25zdCB5ZWFycyA9IFtdXG5jb25zdCBtb250aHMgPSBbXVxuY29uc3QgZGF5cyA9IFtdXG5cbmZvciAobGV0IGkgPSAxOTkwOyBpIDw9IGRhdGUuZ2V0RnVsbFllYXIoKTsgaSsrKSB7XG4gIHllYXJzLnB1c2goaSlcbn1cblxuZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICBtb250aHMucHVzaChpKVxufVxuXG5mb3IgKGxldCBpID0gMTsgaSA8PSAzMTsgaSsrKSB7XG4gIGRheXMucHVzaChpKVxufVxuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ2NoYXQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhZ2U6IDE4LFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IG5hbWU6ICdVU0EnLCB2YWx1ZTogJ+e+juWbvScgfSxcbiAgICAgIHsgbmFtZTogJ0NITicsIHZhbHVlOiAn5Lit5Zu9JywgY2hlY2tlZDogJ3RydWUnIH0sXG4gICAgICB7IG5hbWU6ICdCUkEnLCB2YWx1ZTogJ+W3tOilvycgfSxcbiAgICAgIHsgbmFtZTogJ0pQTicsIHZhbHVlOiAn5pel5pysJyB9LFxuICAgICAgeyBuYW1lOiAnRU5HJywgdmFsdWU6ICfoi7Hlm70nIH0sXG4gICAgICB7IG5hbWU6ICdUVVInLCB2YWx1ZTogJ+azleWbvScgfVxuICAgIF0sXG4gICAgaW5wdXRWYWx1ZTogMSxcbiAgICB5ZWFyczogeWVhcnMsXG4gICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIG1vbnRoczogbW9udGhzLFxuICAgIG1vbnRoOiAyLFxuICAgIGRheXM6IGRheXMsXG4gICAgZGF5OiAyLFxuICAgIHZhbHVlOiBbOTk5OSwgMSwgMV0sXG5cbiAgICBwb3N0ZXI6ICdodHRwOi8veS5ndGltZy5jbi9tdXNpYy9waG90b19uZXcvVDAwMlIzMDB4MzAwTTAwMDAwM3JzS0Y0NEd5YVNrLmpwZz9tYXhfYWdlPTI1OTIwMDAnLFxuICAgIG5hbWU6ICfmraTml7bmraTliLsnLFxuICAgIGF1dGhvcjogJ+iuuOW3jScsXG4gICAgc3JjOiAnJ1xuICB9XG5cbiAgLy8gY2hlY2soZSkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdjaGVja2JveOWPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gIC8vIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBmb3JtU3VibWl0KGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGc3VibWl05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfSxcbiAgICBmb3JtUmVzZXQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcbiAgICB9LFxuXG4gICAgb25UYXAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuYWdlKytcbiAgICB9LFxuICAgIGJpbmRCdXR0b25UYXAoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBmb2N1czogdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGJpbmRLZXlJbnB1dChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuaW5wdXRWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmlucHV0VmFsdWUpXG4gICAgfSxcbiAgICBiaW5kUmVwbGFjZUlucHV0KGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB2YXIgcG9zID0gZS5kZXRhaWwuY3Vyc29yXG4gICAgICBpZiAocG9zICE9PSAtMSkge1xuICAgICAgICAvLyDlhYnmoIflnKjkuK3pl7RcbiAgICAgICAgdmFyIGxlZnQgPSBlLmRldGFpbC52YWx1ZS5zbGljZSgwLCBwb3MpXG4gICAgICAgIC8vIOiuoeeul+WFieagh+eahOS9jee9rlxuICAgICAgICBwb3MgPSBsZWZ0LnJlcGxhY2UoLzExL2csICcyJykubGVuZ3RoXG4gICAgICB9XG5cbiAgICAgIC8vIOebtOaOpei/lOWbnuWvueixoe+8jOWPr+S7peWvuei+k+WFpei/m+ihjOi/h+a7pOWkhOeQhu+8jOWQjOaXtuWPr+S7peaOp+WItuWFieagh+eahOS9jee9rlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLnJlcGxhY2UoLzExL2csICcyJyksXG4gICAgICAgIGN1cnNvcjogcG9zXG4gICAgICB9XG5cbiAgICAgIC8vIOaIluiAheebtOaOpei/lOWbnuWtl+espuS4sizlhYnmoIflnKjmnIDlkI7ovrlcbiAgICAgIC8vIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8xMS9nLCcyJyksXG4gICAgfSxcblxuICAgIGJpbmRCdXR0b24oKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlVmlkZW8oe1xuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICBtYXhEdXJhdGlvbjogNjAsXG4gICAgICAgIGNhbWVyYTogJ2JhY2snLFxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICBzcmM6IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgYmluZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxLCAvLyDpu5jorqQ5XG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooajvvIx0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcbiAgICAgICAgICBzZWxmLnNyYyA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIHNyYzogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgYmluZENoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgY29uc3QgdmFsID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHllYXI6IHRoaXMuZGF0YS55ZWFyc1t2YWxbMF1dLFxuICAgICAgICBtb250aDogdGhpcy5kYXRhLm1vbnRoc1t2YWxbMV1dLFxuICAgICAgICBkYXk6IHRoaXMuZGF0YS5kYXlzW3ZhbFsyXV1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGF1ZGlvUGxheTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmF1ZGlvQ3R4LnBsYXkoKVxuICAgIH0sXG4gICAgYXVkaW9QYXVzZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmF1ZGlvQ3R4LnBhdXNlKClcbiAgICB9LFxuICAgIGF1ZGlvMTQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKDE0KVxuICAgIH0sXG4gICAgYXVkaW9TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmF1ZGlvQ3R4LnNlZWsoMClcbiAgICB9XG5cbiAgfVxuICBvblJlYWR5KGUpIHtcbiAgICAvLyDkvb/nlKggd3guY3JlYXRlQXVkaW9Db250ZXh0IOiOt+WPliBhdWRpbyDkuIrkuIvmlocgY29udGV4dFxuICAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dCgnbXlBdWRpbycpXG4gIH1cbiAgbm9Mb2FkKCkgeyB9XG59XG5cbiJdfQ==