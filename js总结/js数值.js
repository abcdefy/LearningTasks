// 数值
整形，浮点，科学技术法，进制数
// 运算
1.绝对值
Math.abs(x);
2.四舍五入
Math.round(x);
将浮点型转化为整形
3.向上取整
Math.ceil(x);
去掉小数+1	
4.向下取整
Math.floor(x);
去掉小数位
5.取最大值
Math.max(value1,value2[,...])
6.取最小值
Math.min(value1,value2[,...])
7.取随机数
Math.random()
范围是0-1左闭右开
// 其他方法
Math.cos(x);
Math.exp(x);
Math.log(x); ln为底
Math.sqrt(x);
Math.pow(x,y);
// 读取页码
获取text里面的数字时是字符串(化为Number)
parseInt(string, radix);
后面是进制，默认为十进制
parseInt('1.1');会向下取整
parseInt('1b2.4');从第一个字符开始，遇到第一个非数字，结束
parseInt('wwww'); //NaN
// float
parseFloat(string);
保留小数，遇到第一个非数字，结束
// 如果输入有字母，为错
Number(string)
Number('12.4b');//只要其中有一个不能识别的，即为NaN
// 保留位数
num.toFixed(digits);
(100.234).toFixed(2);//输出100.23，为字符串
