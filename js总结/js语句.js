// 1.条件语句
	if(条件){//条件可以是表达式如4>3，会自动转化为布尔值
		语句;
	}else{
		语句2;
	}
// 2.switch
// case 不能是表达式
	switch(){
		case 1 :语句1;
			break;
		case 2 :语句2;
			break;
		default: 语句3;
	}
// 3.循环语句-for,while,do-while
	do{

	}while();
// break:跳出循环体
// continue:跳出本次循环
// 4.for-in遍历
	var num = {
		name :'kitty',
		age :2,
		mew :function(){
			console.log('haha');
		}
	}

	for(var p in num){
		document.write(p);
	}
	会把所有的属性名都打印出来(包括mew)
// 5.with转换代码的作用域(对象中含对象)
	with(cat.friend){
		document.write(name + '\'s age is' + age)
	}
	此时的name 和 age相当于
	cat.friend.name;
	cat.friend.age;
// 异常捕获语句
	try{
		document.write(notDefined);//如果try中语句出错，进入catch语句
	}catch(error){
		alert(error);//这样就会输出错误信息
	}finally{
		语句;//无论是否有错，都会执行
	}


