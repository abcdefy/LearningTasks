// 主要内容
// 1，原型2.设置原型对象3.原型链
// 原型
1.原型与类
类
是具体事务的抽象，由类来构造对象(由抽象到具体)
杯子->我手中的杯子

原型
具体到具体
由现有的对象为原型，来构造一个新的对象
如山寨
// 设置对象的原型
从原型对象到对象的方法
1.Object.create(proto[,propertiesObject])
-proto 一个对象var a = {name: "object",run: function(){}}，作为新创建对象的原型
-propertiesObject 新对象的属性定义

var b = Object.create(a);
b对象中有一个__proto__(隐式属性，不允许修改)属性指向对象原型，能使用原型的属性和方法
新定义的属性存在b中

2.构造函数
-使用prototype属性来设置原型
-使用new创建对象
function Car(logo){
	this.logo = logo || 'unknow name';
}
Car.prototype = {
	start: function(){
		console.log('%s start', this.logo);
	},
	run: function(){
		console.log('%s running',this.logo);
	}
};
Car.prototype.stop = function(){
	console.log('%s stop',this.name);
}//创建原型的两种办法

var landRover = new Car('landRover');
新创建的对象landRover中_proto_属性指向Car.prototype属性
用landRover做this来执行构造函数car
Car.apply(landRover,arguments);
属性被复制

//原型链 
构造函数的Car.prototype属性被赋予了对象
另一个构造函数2的prototype是new了一个Car对象
利用二号构造函数创建出来的对象
function Car(logo){
	this.logo = logo || 'unknow name';
}
Car.prototype = {
	start: function(){
		console.log('%s start', this.logo);
	},
	run: function(){
		console.log('%s running',this.logo);
	}
};
function LandRover(serialno){
	this.serialNumber = serialno;
}
landRover.prototype = new Car('landRover');

var landRover1 = new landRover(100000);

landRover构造函数的prototype属性是Car类型的对象
这个对象中有一个_proto_属性指向Car.prototype
用landRover创建出来的对象就有一个_proto_属性指向new Car
// 访问，修改，删除属性
1.访问
访问对象属性时，优先在对象本身查找，对象如果没有定义这个属性
就顺着原型链查找
2.修改，删除
只能修改，删除对象自身的属性
不影响原型链
若修改原型上的属性，则会在对象上创建一个新的属性
若删除原型上的属性，没有效果，仍然可以访问这个属性
hasOwnProperty方法源自Object
判断是否是对象自己的属性









