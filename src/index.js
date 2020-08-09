/*
 * @Description: 首页
 * @Author: Moobye
 * @Date: 2020-08-07 22:48:08
 * @LastEditTime: 2020-08-09 14:16:23
 * @LastEditors: Moobye
 */

;(function (global, factory) {
  'use strict'
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else {
    global.mb = factory()
  }
})(this, function () {
  'use strict'

})
