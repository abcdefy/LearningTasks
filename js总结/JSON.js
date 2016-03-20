// 把对象转换为字符串
对象用String等方法转换后会变成[Object],不对
想要原样变为字符串
JSON:Javascript Object Notation
js对象方法描述数据
{
	"name" : "jerry",
	"age"  : 1
}
轻量级，纯文本，方便交互
// 方法:
JSON.parse(text[,reviver])
将JSON转化为js对象
receiver是一个function(key, value);
ie6/7不支持
if(!window.JSON){
	window.JSON = {
		parse: function(sJSON){
			return eval('(' + sJSON + ')')
		},
		stringify:function(){

		}
	};
}

JSON.stringify(value［，replacer[,space])
js转化为JSON
JSON.stringify(user,['id','nick'])
只会传递需要的属性