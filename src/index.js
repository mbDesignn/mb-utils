/*
 * @Description: 方法首页
 * @Author: Moobye
 * @Date: 2020-08-07 22:48:08
 * @LastEditTime: 2020-08-11 18:14:56
 * @LastEditors: Moobye
 */

;(function (global, factory) {
  'use strict'

  typeof module === 'object' && typeof module.exports === 'object' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(['global'], factory) : factory(global.mb = {})
})(this, function (exports) {
  'use strict'

  console.log('global :>> ', exports)
  /**
 * @description: 日期时间格式化方法
 * @param  date {Date}，日期
 * @param formatType {string}, 需要返回的日期格式，如 'yyyy-mm-dd'，或者 'yyyy-mm-dd hh:mm:ss'
 * @return {string} 返回的格式化日期
 * @example dateFormat(new Date()) 返回：'2020-08-10'
 */
  function dateFormat (date, formatType = 'yyyy-MM-dd') {

    var o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(formatType)) {
      formatType = formatType.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(formatType)) {
        formatType = formatType.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
        )
      }
    }
    return formatType
  }
  exports.dateFormat = dateFormat
  // window.mb = global
  Object.defineProperty(exports, 'esModule', { value: true })
})
