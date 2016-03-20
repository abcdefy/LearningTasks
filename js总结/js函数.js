// 函数语法
1.函数声明
function add(number, number1){
	var sum = number0 + number1;
	return sum;
}

function 函数名(行参列表){
	执行代码;
	return 返回值
}
var x = add(2, 3);(实参)//函数调用方法
2.函数表达式
var add = function(number0, number1){
	var sum = number0 + number1;
	return sum;
}
//把匿名函数赋值给变量，调用相同

// 函数参数
1.实参数量小于行参，剩下的行参值为undefined，用于运算会NaN
2.实参数量多于行参，多余的会存在隐藏变量arguments(数组)里，可以调用
3.不写参数列表，表示参数不定
// apply更好用
4.参数为原始类型，形式参数并不改变实际参数(值传递)
5.参事是对象类型，实际参数会发生更改(引用传递)
// 作用域
函数局部变量会在超出函数作用域之后被销毁
若在函数内没有再定义一个与全局变量变量名相同的变量，那么
在函数里使用这个名称的变量，修改的是全局变量的值
优先修改函数内的局部变量
// 作为对象属性来使用
var point = {
	x: 1,
	y: 1,
	move: function(setpX, stepY){
		this.x += setpX;
		this.y += stepY;
	}
};
point.move(2, 1);
// 此时函数move是对象的方法
// this表示调用函数的对象

// 构造函数
function Point(x, y){
	this.x = x;
	this.y = y;
	this.move = function(setpX, stepY){
		this.x += setpX;
		this.y += stepY;
	}
}
var point = new Point(1, 1); //最后返回this，获得的结果和上面相同

// 用构造函数创建的对象，每一个都有空方法move，浪费空间
// 原型
function Point(x, y){
	this.x = x;
	this.y = y;
}
Point.prototype.move = function(setpX, stepY){
	this.x += setpX;
	this.y += stepY;
};
//原型里放对象中的通用属性或方法，在创建对象时，不会有move，但可以使用，有一个隐藏属性，指向原型。

function Point(x,y){
	this.x = x;
	this.y = y;
	this.move = function(){
		this.x += 5;
		this.y += 5;
	}
}



