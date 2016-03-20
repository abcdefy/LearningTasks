<!-- js表示行为 -->
<!-- 写法：1.写在script标签里面 -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<script type="text/javascript">
	document.write("hello,world");
</script>
</body>
</html>
<!-- 写在src里，引入.js结尾的文件，代码写在文件里 -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script type="text/javascript" src="hello.js"></script>
</body>
</html>
<!-- 特性 -->
1.运行在浏览器中的代码
2.解释型代码，不需编译，链接
3.规范：1.ECMAScript6:语法规范,如变量，函数等，类似单词
	   2.DOM:文档模型，接口等
<!-- 循环 -->
若要输出<标签>,用''包括在内，用+链接其他内容
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script type="text/javascript">
	var number = 1;
	while(number<10000){
		document.write('<div>' + number + '</div>');
		number = number + 1;
	}
	</script>
</body>
</html>
<!-- 调试 -->
打印：alert(a);
	 console.log(a);
	 利用断点
