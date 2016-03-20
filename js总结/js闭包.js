function add(){
	var i = 0;
	return function(){
		alert(i++);
	}
}
var f = add();
f();
f();
// 代码执行之后，返回匿名函数
// 匿名函数outer指向add环境，所以add函数不会被释放
所以能访问到add函数里的i
这就是闭包(函数＋函数相关引用环境)
闭包允许函数访问引用环境中的变量(又称自由变量)
广义上说，所有js的函数都可以称为闭包(都有scope环境)
// 闭包应用
1.保存现场 2.封装
1.保存现场
fucntion addHandlers(nodes){
	fucntion helper(i){
		return function(){
			alert(i);
		}
	}
	for(var i = 0; i < nodes.length; i++){
		nodes[i].onclick = helper(i);
	}
}
循环中，每次执行，会新创建出来一个helper环境，返回一个匿名函数
这个匿名函数会保存环境中的i
这样，每个节点的匿名函数的i就是固定的
且是独立的
2.闭包
var observer = (function(){
	var observerList = [];
	return{
		add: function(obj){
			observerList.push(obj);
		},
		empty: function(){
			observerList = [];
		},
		getCount: function(){
			return observerList.length;
		},
		get: function(){
			return observerList;
		}
	}
})();
这里observer实际上是一个对象，内含4个方法，在外部看不到变量数组observerList,
只能通过暴漏的api调用




