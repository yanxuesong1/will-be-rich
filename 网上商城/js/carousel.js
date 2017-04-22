var btnBox = getClass('carousel-btns')[0];
var aBtns = btnBox.getElementsByTagName('li');
var aItem = getClass('carousel-item');
var oImgBox = getClass('carousel-imgs')[0];
var oCarousel = getClass('carousel')[0];
var iNow = 0;
var timer;

for(var i =0; i<aBtns.length; i++){
	aBtns[i].index = i;
	aBtns[i].onclick = function(){
		change(this.index);
		iNow = this.index;
	}
}
function change(idx){
	for(var j=0; j<aBtns.length;j++){
		aBtns[j].className = '';
	}
	oImgBox.style.left = -aItem[0].offsetWidth * idx +'px';

	// animate(oImgBox,{
	// 	left:-aItem[0].offsetWidth * idx
	// });
	aBtns[idx].className = 'selected';
}
oCarousel.onmouseover = function(){
	clearInterval(timer);
}
oCarousel.onmouseout = function(){
	run();
}
function run(){
	timer = setInterval(function(){
		iNow++;
		if(iNow == aBtns.length){
			iNow = 0;
		}
		change(iNow);
	},2000);
}
run();

