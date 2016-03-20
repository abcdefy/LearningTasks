// 六大基本数据类型
// 1.Number
整数
var num = 10;
var num = 0377;(0开头的数是八进制数)
var num = 0xff;(0x开头，16进制，字母可以任意大小写)
浮点数
var num = 3.1415;
var num = 3.12e2;(科学计数法，e2表示10的平方，可为负数)
特殊值
NaN(Not a Number)
var num = 1/0; Infinity(无穷)
// 2.String
var name = "Hello";
var name = '10';(单引号双引号都行)
// 3.Boolean
true;
false;(必须小写，大写是标识符，做开关使) 
var sex = true;
if(sex){
	document.write('男');
}else{
	document.write('女');
}
// 4.Object
Object是一组无序的名值对的集合(对象)
前面的是名，后面的是值(属性)，值也可以是一个function(函数方法)
1.直接量定义
var cat = {
	name :'kitty',
	age : 2,
	mew : function(){
		console.log('喵');
	}
}
2.new操作符
var dog = new Object();
// 5.Null
Null类型只有一个null值，表示对象不存在，也是对象类型
var cat = null;Object在未初始化之前可以声明为null
// 6.Undefined
Undefined类型只有一个值，undefined
用途：已声明未赋值的变量
var a;//a已经声明，但没有赋值
console.log(a);//会输出undefined
获取对象中不存在的属性时
var obj = {a:1,b:2};
console.log(obj.c);

// 类型识别
var num;
typeof num;//num已经声明，但是没有赋值，会输出undefined
num = 1;
typeof num;//number
如果是空对象
num = null;
typeof num;//object

// 两大类：原始类型和引用类型
原始类型：5个
引用类型：object
