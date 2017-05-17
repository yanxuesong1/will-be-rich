requirejs.config({
	baseUrl:'jquery/',
	paths: {
		jquery:'jquery-1.12.4'
	}
});
define(['jquery'],function($){
	return {
		open:function(option){
			var $this = this;
			var defaultVal = {
				width:400,
				height:300,
				opacity:0.5,
				title:''
			};
		option = $.extend(defaultVal,option);
		var html = '<div class="dialog-box">'
					+'	<div class="dialog-box">'
					+'		<div class="content">'
					+'		<div class="dialog-title">'
					+'  	<span class="dialog-close">X</span>'
					+'  	</div>'
					+'		<div class="dialog-body">'
					+'		</div>'
					+'	</div>'
				+'	</div>';
		$('body').append(html);
		$('.content').css({
			width:option.width,
			height:option.height,
			marginLeft:-option.width/2,
			marginTop:-option.top/2
		});
		$('.dialog-box').css('background','rgba(0,0,0,'+option.opacity+')');
		$('.title').html(option.title);
		$('.dialog-body').html($(option.content).clone().show() );
		$('.dialog-close').on('click',function(){
			$this.close();
		});
		},
		close:function(){
			$('.dialog-box').remove();
		}	
	}
})