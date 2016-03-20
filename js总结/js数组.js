// 创建数组，数组最后一个元素没有,
var array = new Array();
var array = [1,2,3];//直接量创建数组，可为空
var array = [
	163,
	"netease",
	{color:"red"},//对象
	[],
	true
];//数组里的内容可以是以上各种值
// 数组长度
array.length//5,元素数，空为0
// 获取数组元素
array[0];//第一个，index从0开始
// 修改数组元素
array[0] = "改值"
// 查找元素数组
array.indexOf(searchElement[,formIndex]);
array.indexOf(163);//0返回index，没有反回－1
// 遍历数组
array.forEach(callback[,thisArg]);
callback:回调函数，每找到一个item，便调用此函数，并传值
var editScore = function(item,index,array){
	console.log(item);
	console.log(index)
	alert(array);
};
//这就是一个典型的回调函数，item是数组的元素，index是数组的index，array是数组本身
array.forEach(editScore);

// 七个以下方法都改变了原来的数组

// 数组倒序
array.reverse();
// 排序
array.sort([compareFunction])
var byScore = function(a,b){
	return b.scroe - a.score;//返回结果小于0，保持原序，大于0，反序，等于0，保持原序
}//直接改变原数组
	//不填回调函数
array.sort();//按照unicode编码排序，第一位比较，相同，比较第二位
// 添加元素，在后面
array.push({对象}，123数字,"字符串");
// 在前面添加
array.unshift();
// 获取数组第一个元素，并删除它
array.shift();
// 拿到最后一个元素，并删除
array.pop();
// 在指定位置插入元素，删除元素
array.splice(index,howMany[,ele1,ele2...]);
在index上，删掉几个，插入后面的几个。
删掉的从index开始，插入从index插入

// 以下不再修改原数组

// 拷贝元素
array.slice(begin[,end]);
从indexBegin开始，到indexEnd结束，不包含end
不传结尾，到最后
// 连接
array.concat(arr1,arr2...)
会把arr1，arr2连接到array后
也可以是别的对象，字符串等
// 分隔.split,见字符串
// 以一个字符为分隔，拼接两个数组
arr.join([separator]);
var emails = ["1","2","3"];
emails.join(";");//返回一个以;为分隔的字符串
都不填，默认为逗号，为空字符，会接在一起
// 保留原数组修改
var newScores = [];
var editScore = function(item,index,array){
	newScores.push(item);
	newScores.item.score += 5;
};
array.forEach(editScore);
或者：
array.map(callback[,thisArg]);
会把callback里的函数结果加到一个新的数组里去
var editScore = function(item,index,array){
	return item.score += 5;
};
// 求和
array.reduce(callback[,initialValue]);
var sum = function(previousResult,item,index,array){
	return previousResult+item.score;//每次return都是下一个result
}
students.reduce(sum,0);


