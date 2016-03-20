// 对象类型
Object类型(对象引用类型)
var obj = {};//对象
var arr = [];//数组
var date = new Date();//构造函数
通过js操作的几乎都是object类型的对象
// js的函数是对象类型
// 隐式类型转换
数字 ＋ 字符串，数字会被转化为字符串
其它算术运算符字符串会被转化为数字
(3.14).toFixed(2);
这里3.14会被转换为Number对象的实例
new Number(3.14);
字符串调用api也会转化为String对象

转换场景:算术运算符
		.调用api
		if语句(判断时)
		==
// 显示类型转换
var a = '123';
Number(a);//字符变数字
String()//其它变字符
Boolean()//变布尔值
parseInt()
parseFloat()
!,!!//布尔值

// 类型识别
if(typeof(a)=='string/number/object');//这三种类型可以直接与字符串判断相同来确定
if(a instanceof Array){
	//数组用instanceof来判断
}
数组比较特殊，他是Array的实例，也是object类型，需要注意
// API
1.typeof
是操作符，不是方法，
typeof()或者不加括号
返回值有:
string,number,boolean,undefined,object null也是object;//基本类型除了null以外都可以
function,object//识别对象类型时，除了function以外，数组，构造函数，正则都是object
2.instanceof
[] instanceof Array;//true 
[] instanceof Object;//true
/\d/ instanceof RegExp;//true
1 instanceof Number;//false
'jeee' instanceof String;//false
instanceof能够判别内置对象类型，不能判别原始对象类型，可以识别自定义对象类型，对其继承的对象也是true
3.Object.prototype.toString.call
.call是借用函数的功能
可以识别标准类型和内置对象类型，不能识别自定义对象类型
4.constructor
生成这个对象的构造函数本身
({}).constructor === Object;
(1).constructor === Number;
.会将基本类型转化为对应的对象类型(undefined和null除外)，可以判别自定义对象类型
获取构造函数constructor
function getConstructorName(obj){
	return obj&&obj.constructor&&obj.constructor.toString().match(/function\s*([^(]*)/)[1];
}
obj为了保证null和undefined直接返回本身，没有构造函数返回false
