
function convertTimeStampToDataTime (timeStamp, format) {
  const dateTime = new Date(timeStamp)
  const o = {
    'M+': dateTime.getMonth() + 1,
    'd+': dateTime.getDate(),
    'h+': dateTime.getHours(),
    'm+': dateTime.getMinutes(),
    's+': dateTime.getSeconds(),
    'S': dateTime.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (dateTime.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (const regexp in o) {
    if (new RegExp('(' + regexp + ')').test(format)) {
      format = format.replace(
        RegExp.$1, (RegExp.$1.length === 1) ? (o[regexp]) : (('00' + o[regexp]).substr(('' + o[regexp]).length))
      )
    }
  }
  return format
}

export { convertTimeStampToDataTime }
