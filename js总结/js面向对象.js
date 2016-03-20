// 全局变量
// 封装
// 继承
1.全局变量:可以在任何位置访问，改写
var test = 'some value';
window.test = 'some value';
在程序里直接写变量赋值，而不定义var
test ＝ 'some value';
后两种可以使用delete删除，是window对象的一个属性

特殊定义：
var a = test = 'some value';
只定义了变量a，变量test会被定义在全局
var a = 'abc',
	b = 'abd';
	test = 'abc';//test被分割，若这些语句在函数中，test会被定义为全局变量

2.信息隐藏(封装)
公有方法，公有属性，私有方法，私有属性
对象类型:class
关键字:-private:私有，只有对象本身可以访问
	  -protected:对象和对象派生对象也可以访问
	  -public:都可以访问
// js私有
prototype,普通构造函数无法私有
构造函数
function A(){
	var _config = ['a','b','c'];//这个属性私有，只能在a函数中访问
	this.getConfig = function(){
		return _config;
	}//添加get方法，在外部才能访问，不能任意改写
}

var pro = A.prototype;
pro._step1 = function(){
	//下划线定义原型，为protected方法
}
pro.api = function(){
	//没有下划线，public
}

var a = new A();
a.getConfig();//这样才能访问到_config属性

3.类继承
(function(){
	function ClassA(){}//构造函数，相当于一个类
	ClassA.classMethod = function(){}//写在类上，叫类方法
	ClassA.prototype.api = function(){}//写在原型上，实例方法
	function ClassB(){
		ClassA.apply(this, arguments);//为了构造b时也执行a的构造
	}
	ClassB.prototype = new ClassA();
	ClassB.prototype.constructor = ClassB;
	ClassB.prototype.api = function(){
		ClassA.prototype.api.apply(this, arguments);//类B继承自类A，调用B中的prototype方法实际上调用的是ClassA的方法
	}
	var b = new ClassB();//ClassB继承自a
	b.api();
})();
原型继承

var proto = {//原型对象
	action: function(){

	},
	action2: function(){

	}
}

var obj = Object.create(proto);以proto为原型，创建一个新的对象
obj有一个隐式指针，指向proto对象
访问obj属性时，会顺着原型链查找
若不支持，
var clone = (function(){
	var F = function(){};
	return function(proto){
		F.prototype = proto;
		return new F();
	}
})();


