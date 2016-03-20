// 函数进阶
// 函数定义
1.函数声明
function add(i, j){
	return i+j;
}
2.函数表达式
var add = function(i, j){
	return i+j;
}
3.对象实例化
var add = new Function("i","j","return(i+j);");//一般不用
// 区别
函数声明：函数执行时可以在声明之前调用
函数表达式：必须在函数表达式定义之后才能调用
对象实例化：在实例化之后才能被调用

对象实例化：所建函数作用域是全局作用域，无法访问父函数中的变量
另外两者可以
(function(){
	var i = 10;
	function add(j){
		console.log(i+j);
		debugger;
	}
	add(1);//这样一个匿名函数，add函数是他的子涵数。匿名函数的变量是在闭包作用域里
})();

(function(){
	var i = 10;
	var add = new Function("j","console.log(i+j);")
	add(1);//此时找不到i，因为i在闭包作用域里，访问不到
})();
// 函数
函数在调试器中的结构(console.dir(add))
有两个重要的属性：
1.prototype{//函数原型对象，只有函数才有，实例没有
	constructor
	__proto__//原型链属性
}
2.__proto__//原型链属性，来自于Function构造函数的原型对象，里面的方法可以直接用
		   //实例化生成add函数时，引用了构造函数的原型对象属性
// 构造函数
// 构造函数的方法写在 Car.prototype.method = function(){}这样的语句中(在function之外)
本质上与普通函数没有区别
构造函数通常会有this指定实例属性，原型对象通常有公共方法
名字通常首字母大写

// 函数调用(this)
函数调用时在函数内部会自动生成两个参数，一个是this，一个是arguments
根据this分类：
1.构造函数调用模式
var car =  new + 构造函数名(参数); this指向创建的实例对象car
2.方法调用模式
实例对象调用方法
car.start(); this指向创建的实例对象car
3.函数调用模式
在函数内部定义的子函数，调用时this指向的不是上一级对象，而是window
var myNumber = {
	value : 1;
	double:function(){
		var that = this;//将this存下，因为在方法中，this是myNumber，存下后在下一级function中调用this即可(闭包思想)
		var helper = function(){
			that.value = add(that.value,that.value);//方法里面的函数，调用的this是window
		}
		helper();
	}
}
4.apply(call)调用模式
Function.prototype.apply
所有的函数都可以调用apply方法
apply表示借用别的函数中的方法
p.move.apply(circle,[2,3]); circle表示借用方法的对象实例，[2,3]表示这个方法的参数
p.move.call(circle,2,3); 和apply一样
Function.prototype.bind
借用方法，但不立即使用
var circlemove = p.move.bind(circle,2,3);//指定this和参数
circlemove();调用即可执行方法
setTimeout(circlemove,1000); 延迟一秒，调用方法
// 函数调用(arguments)
参数列表对象，Array-like
1.可以下标访问arguments[index]
2.arguments.length查看长度
但不可以用array的方法
转化：
var arr = Array.prototype.slice.apply(arguments);
arguments.callee在函数内部指向函数本身(匿名函数递归)

console.log(
	(function(i){
		if(i == 0){
			return 1;
		}
		return i*arguments.callee(i-1);
	})(5)
	);//阶乘
// 递归
1.要有明确的return条件
2.自己调用自己
// 闭包
在函数内定义函数，通过函数调用了父函数相关联系变量
这个变量会被放在闭包作用域里
隐藏和封装的作用
构造记忆函数
记忆函数：通过闭包变量记忆之前进行的所有计算，减少计算量
var factorial = (function(){
	var memo = [1];
	var count = 0;
	var fac = function(i){
		count++;
		var result = memo[i];
		if(typeof result === 'number'){
			console.log('调用次数:'+count);
			return result;
		}
		result = i * fac(i-1);
		memo[i] = result;
		return result;
	}
	return fac;
})();
// First-class function
又叫一等公民
js中函数可以当做变量保存，参数传递，返回值返回
[1,2,3].forEach(function(m){

})
1.curry将接收多参数函数变为接收一个函数，多次接收
function add(value){
	var helper = function(next){
		value = typeof(value) === "undefined"?next:value+next;
		return helper;
	}
	helper.valueOf = function(){
		return value;
	}
	return helper;
}
2.回调(异步调用)





