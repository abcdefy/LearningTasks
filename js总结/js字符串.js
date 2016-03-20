// 对js来说，文本框里的文字都是字符串
"里面是字符串，无论是数字还是字母，还是空的"
'单引号也可以'
完全等价
// 取长度
str.length
'哈哈哈'.length
// 取字符串
var userName = input.value;
// 从位置取字符串
str.charAt(index);index从0开始，表示第一位，str.length-1表示最后一位
// 查找字符
str.indexOf(searchValue[,fromIndex]);返回值为第一个相应字符/字符串(第一个字符)的index
找不到输出－1
// 找集合
str.search(regexp);正则
str.search(/[0-9]/);数字集合，也是返回找到第一个正则中的字符的index(number)
找不到输出－1
// match
str.match(regexp);返回的是匹配到的数组['1']
str.match(regexp/g);添加globle参数，返回匹配到的所有
找不到返回null
// 找到并替换
str.replace(regexp|substr,newSubstr|function);
substr:字符串
在正则里记得需要全局参数
替换成空就消失
// 从A开始到B结束，取其中字符串，后不包含，只能为正
str.substring(indexA[,indexB]);
若第二个参数不写，则从A取到结尾
// 可以传入负的索引值，表示从后往前
str.slice(beginSlice[,endSlice]);
str.slice(1,-1);//从第二位取到倒数第二位(-1表示倒数第一位，不包含)
str.slice(-3);从倒数第三取到最后
// 从某一位开始，取长度
str.substr(start[,length])
// 按空格取字符串
str.split([separator][,limit]);
里面是什么，就以身什么分开，结果为数组
limit是输出个数
separator可以是正则/[0-9]/
分隔之后，数字就没了
// 全部小写
str.toLowerCase()
// 全部大写
str.toUpperCase()
// 合并字符串
str1 + str2 + str3;
// 转为字符串
String(163);//'163'
// 转义字符
\? \" \' \\
\t tab键
\n 换行
