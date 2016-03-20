// 对象:拥有属性，方法的集合
// 创建对象：
var car =  new Object();//后面的是对象，前面的是对象实例
var car = {};//直接量创建对象，为空
var car = {
	color : 'red',
	run : function(){
		alert("run");
	}
};//通过添加key-value对来添加属性，用，隔开
car.color;//通过.来访问
car.run();//通过.访问function
car["color"];
car["run"]();//中括号访问属性，括号在外
// 增加属性/方法
car.type = "suv";
car.stop = function(){
	alert("stop")
};
// 修改属性
car.color = "white";
// 删除属性
delete car.color;
// 获取对象构造函数
obj.constructor;//Object
var num = new Number(123);
num.constructor;//Number
// 对象转字符串
num.toString();//"123"
// 获取对象原始值
num.valueOf()//123
// 判断对象拥有的属性，还可判断是否是继承来的，能访问但返回值为false
num.hasOwnproperty(property);//true or false
car.hasOwnproperty("color")//true


var num = {
	color: "red",
	run: function(){
		return this.color;
	}
};