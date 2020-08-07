/*
 * @Description:
 * @Author: Moobye
 * @Date: 2020-08-07 22:48:08
 * @LastEditTime: 2020-08-07 23:08:19
 * @LastEditors: Moobye
 */
// 调用： var time1 = new Date().Format("yyyy-MM-dd");var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");
/**
 * @description: 日历格式化小工具，使用方法：  dateFormat(new Date())
 * @param date {Date} 传入时间，eg: new Date()
 * @return {String} 返回格式化之后的字符串时间，'yyyy-MM-dd'，eg: '2020-08-09'
 */
function dateFormat (date) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  console.log('o :>> ', /(y+)/.test(date))
  if (/(y+)/.test(date)) {
    date = date.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(date)) {
      date = date.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return date
}

console.log('test :>> ', dateFormat(new Date()))
