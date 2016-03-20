// 日期
// 表示当前时间
new Date();
// 2016年5月27日
var date = new Date(2016, 4, 27);//月份从0开始
// 创建日期
new Date(year, month[,day[,hour[,minutes[,second[,milliseconds]]]]]);
day不写默认为1，其它不写默认为0
// 获取信息
date.getFullYear();//2016,年份
date.getMonth();//4,月份
date.getDate();//27日
date.getHours/seconds()
// 格式化
用padding连接，见代码demo

// 设置
date.setFullYear(2015);//变成2015年，其它相同，若设置的天数超过一个月，会自动更改月份
// 求天数
new Date(2001, 2, 0)//会直接变成2月最后一天
// Date转换成Number数值对象
date.getTime();//返回值是距离1970-1-1 00:00:00的毫秒数
// Number转化Date
new Date(毫秒数)
date.setTime(毫秒数);
