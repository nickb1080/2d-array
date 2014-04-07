// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function(root, factory) {
    if (typeof define === "function" && define.amd) {
      define(["exports"], function(_, exports) {
        root.TwoDimensionalArray = factory(root, exports);
      });
    } else if (typeof exports !== "undefined") {
      factory(root, exports);
    } else {
      root.TwoDimensionalArray = factory(root, {});
    }
  })(this, function(root, TwoDimensionalArray) {
    var defaults, extend;
    extend = function(out) {
      var arg, key, val, _i, _len;
      out || (out = {});
      for (_i = 0, _len = arguments.length; _i < _len; _i++) {
        arg = arguments[_i];
        if (!arg) {
          continue;
        }
        for (key in arg) {
          if (!__hasProp.call(arg, key)) continue;
          val = arg[key];
          out[key] = val;
        }
      }
      return out;
    };
    defaults = {
      value: false
    };
    return TwoDimensionalArray = (function(_super) {
      __extends(TwoDimensionalArray, _super);

      function TwoDimensionalArray(param1, param2, options) {
        var i, j, settings, _i, _j;
        settings = extend({}, defaults, (options || (options = {})));
        this.length = x;
        for (i = _i = 0; 0 <= x ? _i < x : _i > x; i = 0 <= x ? ++_i : --_i) {
          this[i] = [];
          this[i].length = y;
        }
        if (settings.value != null) {
          for (j = _j = 0; 0 <= y ? _j < y : _j > y; j = 0 <= y ? ++_j : --_j) {
            this[i][j] = typeof settings.value === "function" ? settings.value(i, j) : settings.value;
          }
        }
      }

      TwoDimensionalArray.prototype.forEach = function(callback) {
        var i, item, j, row, _i, _len, _results;
        _results = [];
        for (i = _i = 0, _len = this.length; _i < _len; i = ++_i) {
          row = this[i];
          _results.push((function() {
            var _j, _len1, _results1;
            _results1 = [];
            for (j = _j = 0, _len1 = row.length; _j < _len1; j = ++_j) {
              item = row[j];
              _results1.push(callback(item, i, j, this));
            }
            return _results1;
          }).call(this));
        }
        return _results;
      };

      TwoDimensionalArray.prototype.each = function() {
        return this.forEach.apply(this, arguments);
      };

      TwoDimensionalArray.prototype.map = function(callback) {
        var i, item, j, map, row, _i, _len, _results;
        map = new TwoDimensionalArray(this.length, this[0].length);
        _results = [];
        for (i = _i = 0, _len = this.length; _i < _len; i = ++_i) {
          row = this[i];
          _results.push((function() {
            var _j, _len1, _results1;
            _results1 = [];
            for (j = _j = 0, _len1 = row.length; _j < _len1; j = ++_j) {
              item = row[j];
              _results1.push(map[i][j] = callback(item, i, j, this));
            }
            return _results1;
          }).call(this));
        }
        return _results;
      };

      TwoDimensionalArray.prototype.size = function() {
        return [this.length, this[0].length];
      };

      return TwoDimensionalArray;

    })(Array);
  });

}).call(this);
