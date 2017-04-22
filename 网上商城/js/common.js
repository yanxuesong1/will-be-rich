function getClass(clsName,context){
	var result = [];
	context = context || document;
	var arr = context.getElementsByTagName('*');
	for(var i=0; i<arr.length; i++){
				// if(arr[i].className  == clsname){
			if(arr[i].className.indexOf(clsName) != -1){
			result.push(arr[i]);
		}
	}
	return result;
}
// 水平导航菜单
var oMenuBox = document.getElementById('menu-box');
var aLi = getClass('menu-btn',oMenuBox);
for (var i=0;i<aLi.length;i++){
	aLi[i].onmouseover = function(){
		var oUl = this.getElementsByTagName('ul')[0];
		// aUl[0].style.display = 'block';
		oUl.style.opacity = 100;
		oUl.style.filter = 'alpha(opacity = 1)'
		oUl.style.top = '56px';
	}
	aLi[i].onmouseout = function(){
		var oUl = this.getElementsByTagName('ul')[0];
		// oUl[0].style.display = 'none';
		oUl.style.opacity = 0;
		oUl.style.filter = 'alpha(opacity = 0)';
		oUl.style.top = '120px';


	}
}

//console.log(i);

function animate(elem, attr, callback){
	clearInterval(elem.timer);
	elem.timer = setInterval(function(){
		var bStop = true;//一个标识位，true代表可以停止定时器，false代表不可不停止
		for(var prop in attr){//1:width
			var curr = parseInt(getStyle(elem, prop));
			if(prop == 'opacity'){
				curr = parseInt(getStyle(elem, prop)*100);
			}
			var speed = (attr[prop] -  curr) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if(curr != attr[prop]){
				bStop = false;
			}

			if(prop == 'opacity'){
				elem.style.opacity = (curr + speed) / 100;
				elem.style.filter = 'alpha(opacity='+(curr + speed)+')';
			}else{
				elem.style[prop] = curr + speed + 'px';
			}
		}
		if(bStop){
			clearInterval(elem.timer);
			callback && callback();
		}
	}, 30);
}

function getStyle(elem, attr){
	if(elem.currentStyle){//IE
		return elem.currentStyle[attr];
	}else{
		return getComputedStyle(elem, false)[attr];
	}
}
